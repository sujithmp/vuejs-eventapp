<template>
    <div class="container">
        <div class="row">
        <h3>Track your day today activities here.</h3>
        <ul class="daily-activity">
            <li class="list-row no-activity-warning" v-if="activities.length ==0">
                <a href="#"><p>You dont have any activities currently added!</p> </a>
            </li>
            <li class="list-row" v-for="(activity, index) in getShort" :key="index" >
                <a href="#"><p>{{ activity}} </p></a> 
                <button @click="remove(index)" class="btn btn-add btn-sm btn-light"><span class="f-w-500">&times;</span></button>
            </li>
        </ul>
        </div>
        <div class="row">
        <div class="daily-activity-add">
            <textarea rows="5" cols="100" class="daily-activity-input" v-model="newActivity"></textarea>
            <button @click="addNewActivity" class="btn btn-lg btn-add">Add</button>
        </div>
        </div>
    </div> 
</template>
<script>
    export default {
        data() {
            return {
            activities: [
                'Today I slept at 4 in the morning after watching Argentina vs Croatia Semi-final.',
                'I wokeup at 8 \'O\' clock in the morning by hearing the alarm.',
                'Even though I opened my eyes, I put the alarm in snooze and slept again until it was close to 9.',
                'By about 9 past half I had bath and got ready for work.',
            ],
            newActivity: '',
            }
        },
        methods:{

            remove(index) {
                this.activities = [...this.activities.filter((item,i) => i!=index)];
            },
            addNewActivity(){
                if(!this.newActivity.trim()) {return alert('Please enter an activity.');}
                this.activities = [this.newActivity, ...this.activities];
                this.newActivity = '';
            }
        },
        computed:{
            getShort() {
                return this.activities.map((data) => {
                    
                    if(data.split('').length > 100 ) return data.split('').filter((c,i) => i < 100).join('') +`...Read More`;
                    return data;
                });
            }
        }        
    }
</script>
