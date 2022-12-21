<template>
  <Header  />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {Header},
  name: 'App',
}
</script>

<style>
  .daily-activity{
    padding-left: 0;    
  }
  .daily-activity li a{
    text-decoration:none;
    width:100%;
    color:#211C1C
  }
  .daily-activity li {
    list-style:none;
    height:40px;
    background-color: #EBE9E9;
    border: 1px solid #C6C3C3;
    line-height: 40px;
    padding-left:10px;
    width:100%;
  }
  .m-auto{
    margin:auto;
  }
  .w-full{
    width:100%;
  }
  .m-l-10{
    margin-left:10px;
  }
  .list-row{
    display:flex;
    align-content: space-between;
    width:100%;
  }
  .f-w-500{
    font-weight:700;
  }
  .daily-activity .btn-add{
    background: #ffff;
    border: 1px thin #A3A0A0;
  }
  .btn-add:hover{
    background:#EAE6E6;
    border: 1px solid #A3A0A0;
  }
  .daily-activity-input{
    width:80%;
    height:110px;
    margin-right:20px;
  }
  .daily-activity-add{
    display:flex;
    align-content: space-between;
  }
  .daily-activity-add .btn-add{
    height:50%;
    background: #4DB87E;
    color:#fff;
  } 
  .daily-activity-add .btn-add:hover{
    background: #7EC19D;
  }
  .daily-activity .no-activity-warning{
    background-color: #D64F4F;
    
  }
  .daily-activity .no-activity-warning a{
    color:#fff;
  }
  .daily-activity li:nth-child(even){
    background-color: #fff;
  }
  /* .daily-activity li:nth-child(odd){
    background-color: #fff;
  } */
</style>
