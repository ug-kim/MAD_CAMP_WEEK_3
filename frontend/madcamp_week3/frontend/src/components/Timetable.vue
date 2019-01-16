<template>
    <!-- Whole div -->
    <div id='whole'>
        <!-- Search -->
        <div id='search_container'>
          <div class="search_tab">
              <a v-on:click="activetab_1=1" v-bind:class="[ activetab_1 === 1 ? 'active' : '' ]">검색</a>
              <a v-on:click="activetab_1=2" v-bind:class="[ activetab_1 === 2 ? 'active' : '' ]">결과</a>
          </div>
          <div class="search_content">
              <div v-if="activetab_1 === 1" class="tabcontent">
                <p>
                  전공구분<br>
                  <input type="checkbox" name="crucial" value="crucial" v-model="crucial"/>공통필수
                  <input type="checkbox" name="crucial" value="ncrucial" v-model="crucial"/>교선필수
                </p>
                <p>
                  교과영역<br>
                  <input type="checkbox" name="subject" value="english" v-model="subject">영어
                  <input type="checkbox" name="subject" value="mirebrain" v-model="subject">MIREBraiN
                  <input type="checkbox" name="subject" value="tech" v-model="subject">기술경영
                  <input type="checkbox" name="subject" value="design" v-model="subject">디자인 사고
                  <input type="checkbox" name="subject" value="leadership" v-model="subject">리더십
                  <input type="checkbox" name="subject" value="physics" v-model="subject">물리
                  <input type="checkbox" name="subject" value="noscience" v-model="subject">비이공계리더
                  <input type="checkbox" name="subject" value="biology" v-model="subject">생물
                  <input type="checkbox" name="subject" value="math" v-model="subject">수학
                  <input type="checkbox" name="subject" value="convergence" v-model="subject">융복합(UGRP/기타)
                  <input type="checkbox" name="subject" value="music" v-model="subject">음악
                  <input type="checkbox" name="subject" value="society" v-model="subject">인문사회
                  <input type="checkbox" name="subject" value="startup" v-model="subject">창업리더
                  <input type="checkbox" name="subject" value="sports" v-model="subject">체육
                  <input type="checkbox" name="subject" value="computer" v-model="subject">컴퓨터
                  <input type="checkbox" name="subject" value="statics" v-model="subject">통계
                  <input type="checkbox" name="subject" value="chemistry" v-model="subject">화학
                </p>
                <p>
                  학년<br>
                  <input type="checkbox" name="grade" value="1" v-model="grade">1학년
                  <input type="checkbox" name="grade" value="2" v-model="grade">2학년
                  <input type="checkbox" name="grade" value="3" v-model="grade">3학년
                  <input type="checkbox" name="grade" value="4" v-model="grade">4학년
                </p>
              </div>
              <div v-if="activetab_1 === 2" class="tabcontent">
                <div class="add_bucket">
                  <div class="bucket_add_list" v-for="slist in slists" :key="slist.id">
                    <div class="bucket_add_title">{{ slist.category }}</div>
                    <div class="bucket_add_content" v-for="item in slists[1].items" :key="item.id">
                      <div class="bucket_add_item">{{ item.title }}</div>
                      <div class="bucket_add_item">{{ item.grade }}</div>
                      <div class="bucket_add_item">{{ item.professor }}</div>
                      <div class="bucket_add_item"><button>+</button></div>   
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- TimeTable -->
        <div id='timetable_container'>
          <div class='timetable_tab'>
            <a v-on:click="activetab_3=1" v-bind:class="[ activetab_3 === 1 ? 'active' : '' ]">시간표1</a>
            <a v-on:click="activetab_3=2" v-bind:class="[ activetab_3 === 2 ? 'active' : '' ]">시간표2</a>
          </div>
          <div class="timetable_content">
            <div v-if="activetab_3 === 1" class="tablecontent">
              <div class="whole_table">
                <div class="empty">
                  <div class="textholder">
                    <div><span class="timetext">8</span></div>
                  </div>

                  <div class="empty time1"></div>
                  <div class="empty time2"></div>
                  <div class="empty time3">9</div>
                  <div class="empty time4"></div>
                  <div class="empty time5">10</div>
                  <div class="empty time6"></div>
                  <div class="empty time7">11</div>
                  <div class="empty time8"></div>
                  <div class="empty time9">12</div>
                  <div class="empty time10"></div>
                  <div class="empty time11">1</div>
                  <div class="empty time12"></div>
                  <div class="empty time13">2</div>
                  <div class="empty time14"></div>
                  <div class="empty time15">3</div>
                  <div class="empty time16"></div>
                  <div class="empty time17">4</div>
                  <div class="empty time18"></div>
                  <div class="empty time19">5</div>
                  <div class="empty time20"></div>
                  <div class="empty time21">6</div>
                  <div class="empty time22"></div>
                  <div class="empty time23">7</div>
                  <div class="empty time24"></div>
                  <div class="empty time25">8</div>
                  <div class="empty time26"></div>
                  <div class="empty time27">9</div>
                  <div class="empty time28"></div>
                  <div class="empty time29">10</div>

                </div>
                <div class="day monday">
                  <div>Mon</div>
                  <div class="mon time1"></div>
                  <div class="mon time2"></div>
                  <div class="mon time3"></div>
                  <div class="mon time4"></div>
                  <div class="mon time5"></div>
                  <div class="mon time6"></div>
                  <div class="mon time7"></div>
                  <div class="mon time8"></div>
                  <div class="mon time9"></div>
                  <div class="mon time10"></div>
                  <div class="mon time11"></div>
                  <div class="mon time12"></div>
                  <div class="mon time13"></div>
                  <div class="mon time14"></div>
                  <div class="mon time15"></div>
                  <div class="mon time16"></div>
                  <div class="mon time17"></div>
                  <div class="mon time18"></div>
                  <div class="mon time19"></div>
                  <div class="mon time20"></div>
                  <div class="mon time21"></div>
                  <div class="mon time22"></div>
                  <div class="mon time23"></div>
                  <div class="mon time24"></div>
                  <div class="mon time25"></div>
                  <div class="mon time26"></div>
                  <div class="mon time27"></div>
                  <div class="mon time28"></div>
                  <div class="mon time29"></div>
                </div>
                <div class="day tueday">
                  <div>Tue</div>
                  <div class="tue time1"></div>
                  <div class="tue time2"></div>
                  <div class="tue time3"></div>
                  <div class="tue time4"></div>
                  <div class="tue time5"></div>
                  <div class="tue time6"></div>
                  <div class="tue time7"></div>
                  <div class="tue time8"></div>
                  <div class="tue time9"></div>
                  <div class="tue time10"></div>
                  <div class="tue time11"></div>
                  <div class="tue time12"></div>
                  <div class="tue time13"></div>
                  <div class="tue time14"></div>
                  <div class="tue time15"></div>
                  <div class="tue time16"></div>
                  <div class="tue time17"></div>
                  <div class="tue time18"></div>
                  <div class="tue time19"></div>
                  <div class="tue time20"></div>
                  <div class="tue time21"></div>
                  <div class="tue time22"></div>
                  <div class="tue time23"></div>
                  <div class="tue time24"></div>
                  <div class="tue time25"></div>
                  <div class="tue time26"></div>
                  <div class="tue time27"></div>
                  <div class="tue time28"></div>
                  <div class="tue time29"></div>
                </div>
                <div class="day wedday">                  
                  <div>Wed</div>
                  <div class="wed time1"></div>
                  <div class="wed time2"></div>
                  <div class="wed time3"></div>
                  <div class="wed time4"></div>
                  <div class="wed time5"></div>
                  <div class="wed time6"></div>
                  <div class="wed time7"></div>
                  <div class="wed time8"></div>
                  <div class="wed time9"></div>
                  <div class="wed time10"></div>
                  <div class="wed time11"></div>
                  <div class="wed time12"></div>
                  <div class="wed time13"></div>
                  <div class="wed time14"></div>
                  <div class="wed time15"></div>
                  <div class="wed time16"></div>
                  <div class="wed time17"></div>
                  <div class="wed time18"></div>
                  <div class="wed time19"></div>
                  <div class="wed time20"></div>
                  <div class="wed time21"></div>
                  <div class="wed time22"></div>
                  <div class="wed time23"></div>
                  <div class="wed time24"></div>
                  <div class="wed time25"></div>
                  <div class="wed time26"></div>
                  <div class="wed time27"></div>
                  <div class="wed time28"></div>
                  <div class="wed time29"></div>
                </div>
                <div class="day thuday">                  
                  <div>Thu</div>
                  <div class="thu time1"></div>
                  <div class="thu time2"></div>
                  <div class="thu time3"></div>
                  <div class="thu time4"></div>
                  <div class="thu time5"></div>
                  <div class="thu time6"></div>
                  <div class="thu time7"></div>
                  <div class="thu time8"></div>
                  <div class="thu time9"></div>
                  <div class="thu time10"></div>
                  <div class="thu time11"></div>
                  <div class="thu time12"></div>
                  <div class="thu time13"></div>
                  <div class="thu time14"></div>
                  <div class="thu time15"></div>
                  <div class="thu time16"></div>
                  <div class="thu time17"></div>
                  <div class="thu time18"></div>
                  <div class="thu time19"></div>
                  <div class="thu time20"></div>
                  <div class="thu time21"></div>
                  <div class="thu time22"></div>
                  <div class="thu time23"></div>
                  <div class="thu time24"></div>
                  <div class="thu time25"></div>
                  <div class="thu time26"></div>
                  <div class="thu time27"></div>
                  <div class="thu time28"></div>
                  <div class="thu time29"></div>
                </div>
                <div class="day friday">                  
                  <div>Fri</div>
                  <div class="fri time1"></div>
                  <div class="fri time2"></div>
                  <div class="fri time3"></div>
                  <div class="fri time4"></div>
                  <div class="fri time5"></div>
                  <div class="fri time6"></div>
                  <div class="fri time7"></div>
                  <div class="fri time8"></div>
                  <div class="fri time9"></div>
                  <div class="fri time10"></div>
                  <div class="fri time11"></div>
                  <div class="fri time12"></div>
                  <div class="fri time13"></div>
                  <div class="fri time14"></div>
                  <div class="fri time15"></div>
                  <div class="fri time16"></div>
                  <div class="fri time17"></div>
                  <div class="fri time18"></div>
                  <div class="fri time19"></div>
                  <div class="fri time20"></div>
                  <div class="fri time21"></div>
                  <div class="fri time22"></div>
                  <div class="fri time23"></div>
                  <div class="fri time24"></div>
                  <div class="fri time25"></div>
                  <div class="fri time26"></div>
                  <div class="fri time27"></div>
                  <div class="fri time28"></div>
                  <div class="fri time29"></div>
                </div>


                            

              </div>
            </div>
            <div v-if="activetab_3 === 2" class="tablecontent">
              table for tab two
            </div>
          </div>
        </div>
        <!-- Bucket -->
        <div id='bucket_container'>
          <div class='bucket_tab'>
            <a v-on:click="activetab_2=1" v-bind:class="[ activetab_2 === 1 ? 'active' : '' ]">필수</a>
            <a v-on:click="activetab_2=2" v-bind:class="[ activetab_2 === 2 ? 'active' : '' ]">고민</a>
            <a v-on:click="activetab_2=3" v-bind:class="[ activetab_2 === 3 ? 'active' : '' ]">필터</a>
          </div>
          <div class='bucket_content'>
          <div v-if='activetab_2 === 1' class="bucketcontent">
            Content for bucket tab 1
          </div>
          <div v-if='activetab_2 === 2' class="bucketcontent">
            Content for bucket tab 2
          </div>
          <div v-if='activetab_2 === 3' class="bucketcontent">
            <p>
              학점 최소
              <input type="text" name="min_credit">이상
              최대
              <input type="text" name="max_credit">이하
            </p>
            <p>
              공강 주
              <input type="text" name="empty_day">일 이상
            </p>
            <p>
              오전공강 주
              <input type="text" name="empty_morning">일 이상
            </p>
            <p>
              저녁수업 주
              <input type="text" name="empty_night">일 이하
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'whole',
  data () {
    return {
      crucial = [],
      subject = [],
      grade = [],
      activetab_1: 1,
      activetab_2: 1,
      activetab_3: 1,
      slists: [
        {category: 'math', 
          items: [{title: 'Item1', professor: 'kh', method: 'pass'}, {title: 'Item2', professor: 'ug', method: 'pass'}]
        }, {category: 'computer', 
          items: [{title: 'Item3', professor: 'kh', method: 'pass'}, {title: 'Item4', professor: 'kh', method: 'pass'}]
        }
      ]
    }
  },
  methods: {
    searchTerm: function() {
      const baseURI = '';
      this.$http.get(`${baseURI}/posts`)
      .then((result) => {
        console.log(result)
        this.posts = result.data
      })
    },
    search: function() {
      let data = {
        crucial: this.crucial,
        subject = this.subject,
        grade = this.grade
      }
      axios.post('/api/search',data)
        .then((response) => {
          //조건에 맞는 subject들 response 받으면
          var i = 0
          var j = 0
          while ( i < res.length){//res
            while ( j < slist.length){
              if (res[i].subject === slist[i].category){
                let item = {
                  _id: res[i]._id,
                  title: res[i].title,
                  professor: res[i].professor,
                  method: res[i].method,
                  class: res[i].class
                }
                slist[i].item.append(item)
                break
              }
              else{
                j++
              }
            }
            i++
          }    
      })
    },
    insert_bucket_must: function(item_id) {
      let data = {
        item = item_id,
        user = name,
        must = true
      }
      axios.post('/api/insert_bucket', data)
      .then((response)=>{    
      })
    },
    insert_bucket_option: function(item_id) {
      let data = {
        item = item_id,
        user = name,
        must = false
      }
      axios.post('/api/insert_bucket', data)
      .then((response)=>{})
    },
    load_bucket_must: function(){
      let data = {
        user = name,
        must = true
      }
      axios.get('api/insert_bucket', data)
      .then((response)=>{
        //response는 필수 subject들
      })
    },
    load_bucket_must: function(){
      let data = {
        user = name,
        must = false
      }
      axios.get('api/insert_bucket', data)
      .then((response)=>{
        //response는 고민 subject들
      })
    },
    timetable: function(subject){
    }
  }
}
</script>

<style>
  body {
    height: 100%;
    margin: 0;
  }

  ol {
    list-style: none;
    padding-left: 0px;
  }

  #whole {
    display: grid;
    width: 1400px;
    grid-template-columns: 500px 900px;
    margin: auto;
  }

  /* ---------------------------------Search region------------------------------------ */
  #search_container {
    height: 41vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
    margin: 10px;
  }

  .search_tab {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
  }

  .search_tab ul {
    list-style-type: none;
    margin-left: 20px;
  }

  .search_tab a {
    float: left;
    cursor: pointer;
    padding: 10px 12px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
  }

  .search_tab a:last-child {
    border-right: 1px solid #ccc;
  }

  /* Change background color of search_tab on hover */
  .search_tab a:hover {
    background-color: #aaa;
    color: #fff;
  }

  /* Styling for active tab */
  .search_tab a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
  }

  /* Style the tab content */
  .tabcontent {
    padding: 10px;
    height: 35vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
  }

  /* ---------------------------------------Search table result tab----------------------------------------- */
  .bucket_add_list {
    display: grid;
    margin: 5px;
  }

  .bucket_add_title {
    margin-left: 10px;
  }

  .bucket_add_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-left: 10px;
    margin-top: 3px;
  }

  .bucket_add_item {
    margin-top: 5px;
    margin-bottom: 5px;
  }


  /* ----------------------------------------Bucket region----------------------------------------- */
  #bucket_container {
    height: 51vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
    margin: 10px;
  }
  .bucket_tab {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
  }

  .bucket_tab ul {
    list-style-type: none;
    margin-left: 20px;
  }

  .bucket_tab a {
    float: left;
    cursor: pointer;
    padding: 10px 12px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
  }

  .bucket_tab a:last-child {
    border-right: 1px solid #ccc;
  }

  /* Change background color of search_tab on hover */
  .bucket_tab a:hover {
    background-color: #aaa;
    color: #fff;
  }

  /* Styling for active tab */
  .bucket_tab a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
  }

  /* Style the tab content */
  .bucketcontent {
    padding: 10px;
    height: 43vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
  }

  /* ---------------------------------------Timetable region----------------------------------------- */
  #timetable_container {
    height: 92vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
    margin: 10px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .timetable_tab {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
  }

  .timetable_tab ul {
    list-style-type: none;
    margin-left: 20px;
  }

  .timetable_tab a {
    float: left;
    cursor: pointer;
    padding: 10px 12px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
  }

  .timetable_tab a:last-child {
    border-right: 1px solid #ccc;
  }

  /* Change background color of search_tab on hover */
  .timetable_tab a:hover {
    background-color: #aaa;
    color: #fff;
  }

  /* Styling for active tab */
  .timetable_tab a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
  }

  /* Style the tab content */
  .tablecontent {
    padding: 10px;
    height: 86vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1;
  }

  /* ---------------------------------------Timetable empty set----------------------------------------- */
  .whole_table {
    display: grid;
    grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr;
    text-align: center;

  }

  .empty {
    display: grid;
    grid-template-rows: 32px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }

  .day {
    display: grid;
    grid-template-rows: 32px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  
  }

  .monday .time1 {
    border-top: 1px solid lightgray;
  }

  .timetext {

    display: inline-block;
    position: absolute;
    bottom: -8px;
  }

  .textholder {
    flex: none;
  }

  
</style>
