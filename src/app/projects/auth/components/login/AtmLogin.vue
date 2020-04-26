<template>
  <div :style="{ height:winHeight+'px',backgroundImage: `url('${bgdUrl}')`}">

    <Row style="padding-top: 8%">
      <Col :span="7" offset="1">
        <span>&nbsp;</span>
        <div class="atm-login-box" v-if="location==='left'">
          <AtmLoginForm/>
        </div>
      </Col>
      <Col :span="7" offset="1">
        <span>&nbsp;</span>
        <div class="atm-login-box" v-if="location==='center'">
          <AtmLoginForm/>
        </div>
      </Col>
      <Col :span="7">
        <span>&nbsp;</span>
        <div class="atm-login-box" style="margin-right: 20px" v-if="location==='right'">
          <AtmLoginForm/>
        </div>
      </Col>
    </Row>

    <Row style="margin-top: 250px">
      <Col :span="3" offset="11">
        <span> <b>Designed by Automannn</b> </span> <br>
        <span style="margin-left: 50px"> <b>2020</b> </span>
      </Col>
    </Row>
  </div>
</template>

<script>
import AtmLoginForm from './part/AtmLoginForm'
export default {
  name: 'AtmLogin',
  components: {AtmLoginForm},
  props: {
    bgdUrl: {
      type: String,
      default: '../../../../../../static/img/Starry.png'
    },
    location: {
      type: String,
      default: 'center' // left,center,right
    }
  },
  data () {
    return {
      winHeight: window.screen.height * 0.92
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style scoped>
  .atm-login-box {
    width: 100%;
    padding-bottom: 20px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }
</style>
