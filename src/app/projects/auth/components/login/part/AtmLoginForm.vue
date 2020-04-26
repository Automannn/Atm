<template>
  <div>
    <Form v-if="isLogin"  :ref="refLoginName" :model="atmUser" :rules="ruleValidate"
          :label-width="100">
      <FormItem label="邮箱/电话" prop="mail" style="padding-top: 20px ">
        <Input v-model="atmUser.mail" prefix="ios-contact" style="width: 90%" placeholder="请输入邮箱 或 电话号码"/>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="atmUser.password" prefix="md-lock" style="width: 90%" placeholder="请输入密码"/>
      </FormItem>
      <FormItem label="记住密码">
        <RadioGroup v-model="rememberLogin">
          <Radio label="1">是</Radio>
          <Radio label="0">否</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" icon="md-cloud-upload" @click="handleSubmit(refLoginName)">登陆</Button>
        <Button @click="handleReset(refLoginName)" style="margin-left: 8px">重置</Button>
        <Button @click="fnToRegister" icon="md-arrow-forward" type="warning" style="margin-left: 8px">注册</Button>
      </FormItem>
    </Form>
    <Form v-if="isRegister" :ref="refRegisterName" :model="formValidate" :rules="ruleValidate"
          :label-width="100">
      <FormItem label="用户名" prop="name" style="padding-top: 20px">
        <Input v-model="formValidate.name" style="width:90%" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="E-mail" prop="mail">
        <Input v-model="formValidate.mail" style="width:90%" placeholder="请输入邮箱"/>
      </FormItem>
      <FormItem label="城市" prop="city">
        <Select v-model="formValidate.city" style="width:90%" placeholder="请选择所在的城市">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="提醒日期">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="8" style="margin-left: 10px">
            <FormItem prop="time">
              <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="0">女</Radio>
          <Radio label="1">男</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" style="width: 90%" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="输入描述..."/>
      </FormItem>
      <FormItem>
        <Button type="primary" icon="md-cloud-upload" @click="handleSubmit(refRegisterName)">立即注册</Button>
        <Button type="warning" @click="fnToLogin" icon="md-arrow-back" style="margin-left: 8px">返回登陆</Button>
      </FormItem>
    </Form>
  </div>

</template>

<script>
export default {
  name: 'AtmLoginForm',
  props: {

    refLoginName: {
      type: String,
      default: 'atmLoginForm'
    },
    refRegisterName: {
      type: String,
      default: 'atmRegisterForm'
    }
  },
  data () {
    return {
      isLogin: true,
      isRegister: false,
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      atmUser: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      rememberLogin: '0',
      ruleValidate: {
        name: [
          {required: true, message: 'The name cannot be empty', trigger: 'blur'}
        ],
        mail: [
          {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
          {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
        ],
        city: [
          {required: true, message: 'Please select the city', trigger: 'change'}
        ],
        gender: [
          {required: true, message: 'Please select gender', trigger: 'change'}
        ],
        interest: [
          {required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change'},
          {type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change'}
        ],
        date: [
          {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
        ],
        time: [
          {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
        ],
        desc: [
          {required: true, message: 'Please enter a personal introduction', trigger: 'blur'},
          {type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    fnToRegister () {
      this.isLogin = false
      this.isRegister = true
    },
    fnToLogin () {
      this.isLogin = true
      this.isRegister = false
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
