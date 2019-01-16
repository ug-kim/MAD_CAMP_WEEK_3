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
                  <input type="checkbox" name="crucial" value="crucial" v-model="crucial">공통필수
                  <input type="checkbox" name="crucial" value="ncrucial" v-model="crucial">교선필수
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
                  <input type="checkbox" name="subject" value="convergence" v-model="subject">융합탐구세미나
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
                <div class="search_button"><button class="search" v-on:click="search">검색</button></div>
              </div>
              <div v-if="activetab_1 === 2" class="tabcontent">
                <div class="add_bucket">
                  <div class="bucket_add_list" v-for="slist in slists" :key="slist.id">
                    <div class="bucket_add_title" style="font-weight:bold;">{{ slist.category }}</div>
                    <div class="bucket_add_content" v-for="item in slist.items" :key="item._id">
                      <div class="bucket_add_item">{{ item.title }}</div>
                      <div class="bucket_add_item">{{ item.method }}</div>
                      <div class="bucket_add_item">{{ item.professor }}</div>
                      <div class="bucket_add_item">
                        <button v-on:click="insert_bucket_must" >필수</button>
                        <button v-on:click="insert_bucket_option">고민</button>
                      </div>   
                    </div>
                  </div>

                  <div class="wheel_region_1">
                    <div class="wheel_1"></div>
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
                  <div class=" empty textholder"><span class="timetext">8</span></div>
                  <div class="empty time1"></div>
                  <div class="empty time2 textholder"><span class="timetext">9</span></div>
                  <div class="empty time3"></div>
                  <div class="empty time4 textholder"><span class="timetext">10</span></div>
                  <div class="empty time5"></div>
                  <div class="empty time6 textholder"><span class="timetext">11</span></div>
                  <div class="empty time7"></div>
                  <div class="empty time8 textholder"><span class="timetext">12</span></div>
                  <div class="empty time9"></div>
                  <div class="empty time10 textholder"><span class="timetext">1</span></div>
                  <div class="empty time11"></div>
                  <div class="empty time12 textholder"><span class="timetext">2</span></div>
                  <div class="empty time13"></div>
                  <div class="empty time14 textholder"><span class="timetext">3</span></div>
                  <div class="empty time15"></div>
                  <div class="empty time16 textholder"><span class="timetext">4</span></div>
                  <div class="empty time17"></div>
                  <div class="empty time18 textholder"><span class="timetext">5</span></div>
                  <div class="empty time19"></div>
                  <div class="empty time20 textholder"><span class="timetext">6</span></div>
                  <div class="empty time21"></div>
                  <div class="empty time22 textholder"><span class="timetext">7</span></div>
                  <div class="empty time23"></div>
                  <div class="empty time24 textholder"><span class="timetext">8</span></div>
                  <div class="empty time25"></div>
                  <div class="empty time26 textholder"><span class="timetext">9</span></div>
                  <div class="empty time27"></div>
                  <div class="empty time28 textholder"><span class="timetext">10</span></div>
                  <div class="empty time29"></div>
                </div>
                <div class="day monday">
                  <div>Mon</div>
                  <div class="mon time time1"></div>
                  <div class="mon time time2"></div>
                  <div class="mon time time3"></div>
                  <div class="mon time time4"></div>
                  <div class="mon time time5">
                    <div class="subject_container">
                      <div class="subject_delete"><button>X</button></div>
                      <div class="subject_content color3 size3">
                        <p class="subject_specific">운영체제</p>
                        <p class="subject_specific">차보경</p>
                        <p class="subject_specific">분반 : 1</p>
                      </div>
                    </div>
                  </div>
                  <div class="mon time time6"></div>
                  <div class="mon time time7"></div>
                  <div class="mon time time8"></div>
                  <div class="mon time time9"></div>
                  <div class="mon time time10"></div>
                  <div class="mon time time11"></div>
                  <div class="mon time time12"></div>
                  <div class="mon time time13"></div>
                  <div class="mon time time14"></div>
                  <div class="mon time time15"></div>
                  <div class="mon time time16"></div>
                  <div class="mon time time17"></div>
                  <div class="mon time time18"></div>
                  <div class="mon time time19"></div>
                  <div class="mon time time20"></div>
                  <div class="mon time time21"></div>
                  <div class="mon time time22"></div>
                  <div class="mon time time23"></div>
                  <div class="mon time time24"></div>
                  <div class="mon time time25"></div>
                  <div class="mon time time26"></div>
                  <div class="mon time time27"></div>
                  <div class="mon time time28"></div>
                  <div class="mon time time29"></div>
                </div>
                <div class="day tueday">
                  <div>Tue</div>
                  <div class="tue time time1"></div>
                  <div class="tue time time2"></div>
                  <div class="tue time time3"></div>
                  <div class="tue time time4"></div>
                  <div class="tue time time5"></div>
                  <div class="tue time time6"></div>
                  <div class="tue time time7"></div>
                  <div class="tue time time8"></div>
                  <div class="tue time time9"></div>
                  <div class="tue time time10"></div>
                  <div class="tue time time11"></div>
                  <div class="tue time time12"></div>
                  <div class="tue time time13"></div>
                  <div class="tue time time14"></div>
                  <div class="tue time time15"></div>
                  <div class="tue time time16"></div>
                  <div class="tue time time17"></div>
                  <div class="tue time time18"></div>
                  <div class="tue time time19"></div>
                  <div class="tue time time20"></div>
                  <div class="tue time time21"></div>
                  <div class="tue time time22"></div>
                  <div class="tue time time23"></div>
                  <div class="tue time time24"></div>
                  <div class="tue time time25"></div>
                  <div class="tue time time26"></div>
                  <div class="tue time time27"></div>
                  <div class="tue time time28"></div>
                  <div class="tue time time29"></div>
                </div>
                <div class="day wedday">                  
                  <div>Wed</div>
                  <div class="wed time time1"></div>
                  <div class="wed time time2"></div>
                  <div class="wed time time3"></div>
                  <div class="wed time time4"></div>
                  <div class="wed time time5"></div>
                  <div class="wed time time6"></div>
                  <div class="wed time time7"></div>
                  <div class="wed time time8"></div>
                  <div class="wed time time9"></div>
                  <div class="wed time time10"></div>
                  <div class="wed time time11"></div>
                  <div class="wed time time12"></div>
                  <div class="wed time time13"></div>
                  <div class="wed time time14"></div>
                  <div class="wed time time15"></div>
                  <div class="wed time time16"></div>
                  <div class="wed time time17"></div>
                  <div class="wed time time18"></div>
                  <div class="wed time time19"></div>
                  <div class="wed time time20"></div>
                  <div class="wed time time21"></div>
                  <div class="wed time time22"></div>
                  <div class="wed time time23"></div>
                  <div class="wed time time24"></div>
                  <div class="wed time time25"></div>
                  <div class="wed time time26"></div>
                  <div class="wed time time27"></div>
                  <div class="wed time time28"></div>
                  <div class="wed time time29"></div>
                </div>
                <div class="day thuday">                  
                  <div>Thu</div>
                  <div class="thu time time1"></div>
                  <div class="thu time time2"></div>
                  <div class="thu time time3"></div>
                  <div class="thu time time4"></div>
                  <div class="thu time time5"></div>
                  <div class="thu time time6"></div>
                  <div class="thu time time7"></div>
                  <div class="thu time time8"></div>
                  <div class="thu time time9"></div>
                  <div class="thu time time10"></div>
                  <div class="thu time time11"></div>
                  <div class="thu time time12"></div>
                  <div class="thu time time13"></div>
                  <div class="thu time time14"></div>
                  <div class="thu time time15"></div>
                  <div class="thu time time16"></div>
                  <div class="thu time time17"></div>
                  <div class="thu time time18"></div>
                  <div class="thu time time19"></div>
                  <div class="thu time time20"></div>
                  <div class="thu time time21"></div>
                  <div class="thu time time22"></div>
                  <div class="thu time time23"></div>
                  <div class="thu time time24"></div>
                  <div class="thu time time25"></div>
                  <div class="thu time time26"></div>
                  <div class="thu time time27"></div>
                  <div class="thu time time28"></div>
                  <div class="thu time time29"></div>
                </div>
                <div class="day friday">                  
                  <div>Fri</div>
                  <div class="fri time time1"></div>
                  <div class="fri time time2"></div>
                  <div class="fri time time3"></div>
                  <div class="fri time time4"></div>
                  <div class="fri time time5"></div>
                  <div class="fri time time6"></div>
                  <div class="fri time time7"></div>
                  <div class="fri time time8"></div>
                  <div class="fri time time9"></div>
                  <div class="fri time time10"></div>
                  <div class="fri time time11"></div>
                  <div class="fri time time12"></div>
                  <div class="fri time time13"></div>
                  <div class="fri time time14"></div>
                  <div class="fri time time15"></div>
                  <div class="fri time time16"></div>
                  <div class="fri time time17"></div>
                  <div class="fri time time18"></div>
                  <div class="fri time time19"></div>
                  <div class="fri time time20"></div>
                  <div class="fri time time21"></div>
                  <div class="fri time time22"></div>
                  <div class="fri time time23"></div>
                  <div class="fri time time24"></div>
                  <div class="fri time time25"></div>
                  <div class="fri time time26"></div>
                  <div class="fri time time27"></div>
                  <div class="fri time time28"></div>
                  <div class="fri time time29"></div>
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
import axios from 'axios'

export default {
  name: 'whole',
  data () {
    return {
      crucial: [],
      subject: [],
      grade: [],
      activetab_1: 1,
      activetab_2: 1,
      activetab_3: 1,
      slists: [
        {category: 'math',
          items: []
        }, {category: 'computer',
          items: []
        }, {category: 'english',
          items: []
        }, {category: 'physics',
          items: []
        }, {category: 'noscience',
          items: []
        }, {category: 'biology',
          items: []
        }, {category: 'convergence',
          items: []
        }, {category: 'music',
          items: []
        }, {category: 'society',
          items: []
        }, {category: 'startup',
          items: []
        }, {category: 'sports',
          items: []
        }, {category: 'statics',
          items: []
        }, {category: 'chemistry',
          items: []
        }, {category: 'mirebrain',
          items: []
        }, {category: 'tech',
          items: []
        }, {category: 'design',
          items: []
        }, {category: 'leadership',
          items: []
        }
      ]
    }
  },
  methods: {
    search: function () {
      let data = {
        crucial: this.crucial,
        subject: this.subject,
        grade: this.grade
      }
      axios.post('/api/search', data)
        .then((res) => {
          // 조건에 맞는 subject들 response 받으면
          var i = 0
          var j = 0
          while (i < res.length) { // res
            while (j < this.slists.length) {
              if (res[i].subject === this.slists[i].category) {
                let item = {
                  _id: res[i]._id,
                  title: res[i].title,
                  professor: res[i].professor,
                  method: res[i].method,
                  class: res[i].class
                }
                this.slists[i].items.append(item)
                break
              }
              else {
                j++
              }
            }
            i++
          }
        })
    },
    insert_bucket_must: function (itemId) {
      let data = {
        item: itemId,
        user: name,
        must: true
      }
      axios.post('/api/insert_bucket', data)
        .then((response)=> {
        })
    },
    insert_bucket_option: function (itemId) {
      let data = {
        item: itemId,
        user: name,
        must: false
      }
      axios.post('/api/insert_bucket', data)
        .then((response) => {})
    },
    load_bucket_must: function () {
      let data = {
        user: name,
        must: true
      }
      axios.get('api/insert_bucket', data)
        .then((response) => {
        //  response는 필수 subject들
        })
    },
    load_bucket_option: function () {
      let data = {
        user: name,
        must: false
      }
      axios.get('api/insert_bucket', data)
        .then((response) => {
          //  response는 고민 subject들
        })
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
    box-shadow: 3px 3px 6px #e1e1e1;
    overflow: auto;
  }


  /* ---------------------------------------Search table result tab----------------------------------------- */
  .bucket_add_list {
    display: grid;
    margin: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .bucket_add_title {
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .bucket_add_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-left: 10px;
    margin-top: 3px;
    border-top: 1px solid lightgray;
  }

  .bucket_add_item {
    margin-top: 5px;
    margin-bottom: 5px;
  }


  /* ----------------------------------------Bucket region----------------------------------------- */
  #bucket_container {
    height: 49vh;
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
    box-shadow: 3px 3px 6px #e1e1e1;
    overflow: auto;
  }

  .add_bucket {
    height: 35vh;
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
    z-index: 1;
    height: 86vh;
    
  }

  .empty {
    display: grid;
    grid-template-rows: 29px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }

  .day {
    display: grid;
    grid-template-rows: 29px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  
  }

  .mon {
    border-top: 1px dashed lightgray;

  }
  .tue {
    border-top: 1px dashed lightgray;
  }
  .wed {
    border-top: 1px dashed lightgray;
  }
  .thu {
    border-top: 1px dashed lightgray;
  }
  .fri {
    border-top: 1px dashed lightgray;
  }

  .textholder {
    position: relative;
  }

  .timetext {
    position: absolute;
    bottom: -8px;
    right: 10px;
  }

/* ------------------------------Timetable specific components---------------------------- */
  .subject_container {
    position: absolute;
    margin-left: 0.2vh;
    margin-right: 0.2vh;
    z-index: 2;
    display: grid;
  }

  .subject_content {
    display: flex;
    flex-direction: column;
  }

  .time {
    position: relative;
  }

  .subject_delete {
    position: absolute;
  }

  .subject_specific {
    color: black;
    margin: 0;
  }

/* ------------------------------------Color------------------------------------- */
  .color1 {
    background-color: #A2E6B7;
  }

  .color2 {
    background-color: #FAD391;
  }

  .color3 {
    background-color: #FB8896;
  }

  .color4 {
    background-color: #98BDED;
  }

  .color5 {
    background-color: #E3CEF5;
  }

  .color6 {
    background-color: #D4F2CA;
  }

  .color7 {
    background-color: #ECD9BB;
  }

  .color8 {
    background-color: #fd999a;
  }

  .color9 {
    background-color: #f8ecc9;
  }
  
  .color10 {
    background-color: #fcbe32;
  }
  
/* ----------------------------------------Size--------------------------------------- */

  .size1 {  
    /* 1은 30분단위 */
    height: 2.83vh;
    width: 15.8vh;
  }

  .size2 {
    height: 5.66vh;
    width: 15.8vh;
  }

  .size3 {
    height: 8.49vh;
    width: 15.8vh;
  }

  .size4 {
    height: 11.32vh;
    width: 15.8vh;
  }

  .size6 {
    height: 16.98vh;
    width: 15.8vh;
  }

  .size8 {
    height: 22.64vh;
    width: 15.8vh;
  }
</style>