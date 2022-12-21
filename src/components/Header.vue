<template>
    <nav class="event-nav">
        <label class="logo">Logo</label>
        <ul>
            <li>
                <a href="#">
                    <router-link to="/activity">
                    Home
                    </router-link>
                </a>   
            </li>
            <li>
                <a href="#">  
                    <router-link to="/sign-in">
                        Sign In
                    </router-link>
                </a>   
            </li>
        </ul>
    </nav>
</template>    

<script>
    export default {
        
    }
</script>

<style scoped>
    .event-nav {
        width:100%;
        height:80px;
        background-color: #4DB87E;
    }
    label.logo{
        color:#fff;
        font-size:large;
        line-height: 80px;
        font-weight:500;
    }
    nav ul {
        float:right;
        margin-right:20px;
    }
    nav ul  li {
        display:inline-block;
        margin-right: 10px;
        margin-top:0;
        line-height:80px;
    }
    nav ul li a {
        color:#fff;
        font-size:large;
        text-transform:uppercase;
        padding: 17px 13px;
        border-radius: 1px;
        text-decoration:none;
    }
    a:hover {
        background: #7EC19D;
        transition:0.5s;
    }   
</style>
