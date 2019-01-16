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
                <div class="largebox">
                  <div class="namebox">전공구분</div>
                  <div class="contentbox">
                    <input type="checkbox" name="crucial" value="crucial" v-model="crucial">공통필수
                    <input type="checkbox" name="crucial" value="ncrucial" v-model="crucial">교선필수
                  </div>
                </div>
                <div class="largebox">
                  <div class="namebox">교과영역</div>
                  <div class="contentbox">
                    <div class="smallbox">
                      <div><input type="checkbox" name="subject" value="english" v-model="subject">영어</div>
                      <div><input type="checkbox" name="subject" value="mirebrain" v-model="subject">MIREBraiN</div>
                      <div><input type="checkbox" name="subject" value="tech" v-model="subject">기술경영</div>
                      <div><input type="checkbox" name="subject" value="design" v-model="subject">디자인 사고</div>
                    </div>
                    <div class="smallbox">
                      <div><input type="checkbox" name="subject" value="leadership" v-model="subject">리더십</div>
                      <div><input type="checkbox" name="subject" value="physics" v-model="subject">물리</div>
                      <div><input type="checkbox" name="subject" value="noscience" v-model="subject">비이공계리더</div>
                      <div><input type="checkbox" name="subject" value="biology" v-model="subject">생물</div>
                    </div>
                    <div class="smallbox">
                      <div><input type="checkbox" name="subject" value="math" v-model="subject">수학</div>
                      <div><input type="checkbox" name="subject" value="convergence" v-model="subject">융탐세</div>
                      <div><input type="checkbox" name="subject" value="music" v-model="subject">음악</div>
                      <div><input type="checkbox" name="subject" value="society" v-model="subject">인문사회</div>
                    </div>
                    <div class="smallbox">
                      <div><input type="checkbox" name="subject" value="startup" v-model="subject">창업리더</div>
                      <div><input type="checkbox" name="subject" value="sports" v-model="subject">체육</div>
                      <div><input type="checkbox" name="subject" value="computer" v-model="subject">컴퓨터</div>
                      <div><input type="checkbox" name="subject" value="statics" v-model="subject">통계</div>
                    </div>
                    <div class="smallbox">
                      <div><input type="checkbox" name="subject" value="chemistry" v-model="subject">화학</div>
                    </div>
                  </div>
                </div>
                <div class="largebox">
                  <div class="namebox">학년</div>
                    <div class="contentbox">
                      <input type="checkbox" name="grade" value="1" v-model="grade">1학년
                      <input type="checkbox" name="grade" value="2" v-model="grade">2학년
                      <input type="checkbox" name="grade" value="3" v-model="grade">3학년
                      <input type="checkbox" name="grade" value="4" v-model="grade">4학년
                    </div>
                </div>
                <div class="search_button"><button class="search" v-on:click="search(); activetab_1=2;">검색</button></div>
              </div>
              <div v-if="activetab_1 === 2" class="tabcontent">
                <div class="add_bucket">
                  <div class="bucket_add_list" v-show="slist.show" v-for="slist in slists" :key="slist.id">
                    <div class="bucket_add_title" style="font-weight:bold;">{{ slist.name }}</div>
                    <div class="bucket_add_content" v-for="item in slist.items" :key="item.id">
                      <div class="bucket_add_item">{{ item.title }}</div>
                      <div class="bucket_add_item">{{ item.method }}</div>
                      <div class="bucket_add_item">{{ item.professor }}</div>
                      <div class="bucket_add_item">
                        <span>{{ item.class }}</span>
                        <span class="bibutton">
                          <span><button class="essential" v-on:click="insert_bucket_must(item.id); load_bucket_must();">필수</button></span>
                          <span><button class="noessential" v-on:click="insert_bucket_option(item.id); load_bucket_option();">고민</button></span>
                        </span>
                      </div>
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
                  </div>
                  <div class="mon time time6"></div>
                  <div class="mon time time7"></div>
                  <div class="mon time time8"></div>
                  <div class="mon time time9"></div>
                  <div class="mon time time10"></div>
                  <div class="mon time time11">
                    <component v-bind:is='component1'></component>
                  </div>
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
                  <div class="tue time time6">
                    <component v-bind:is='component2'></component>
                  </div>
                  <div class="tue time time7"></div>
                  <div class="tue time time8"></div>
                  <div class="tue time time9"></div>
                  <div class="tue time time10"></div>
                  <div class="tue time time11"></div>
                  <div class="tue time time12"></div>
                  <div class="tue time time13"></div>
                  <div class="tue time time14"></div>
                  <div class="tue time time15">
                    <component v-bind:is='component3'></component>
                  </div>
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
                  <div class="wed time time18">
                    <component v-bind:is='component3'></component>
                  </div>
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
                  <div class="thu time time6">
                    <component v-bind:is='component2'></component>
                  </div>
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
          <a v-on:click="activetab_2=1 ; load_bucket_must();" v-bind:class="[ activetab_2 === 1 ? 'active' : '' ]">필수</a>
          <a v-on:click="activetab_2=2; load_bucket_option();" v-bind:class="[ activetab_2 === 2 ? 'active' : '' ]">고민</a>
        </div>
        <div class='bucket_content'>
        <div v-if='activetab_2 === 1' class="bucketcontent">
          <div class="ess_bucket">
            <div class="ess_add_list" v-show="esslist.show" v-for="esslist in esslists" :key="esslist._id">
              <div class="ess_add_title" style="font-weight:bold;">{{ esslist.name }}</div>
              <div class="ess_add_content" v-for="item in esslist.items" :key="item._id">
                <div class="ess_add_item">{{ item.title }}</div>
                <div class="ess_add_item">{{ item.method }}</div>
                <div class="ess_add_item">{{ item.professor }}</div>
                <div class="ess_add_item">
                  <span>{{ item.class }}</span>
                  <span class="bibutton">
                    <button class="plus" v-on:click="plus()">+</button>
                    <button class="delete" v-on:click="del()">-</button>
                    <button class="deletedb" v-on:click="delete_timetable(item); load_bucket_must();">X</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if='activetab_2 === 2' class="bucketcontent">
          <div class="non_bucket">
            <div class="non_add_list" v-show="nonlist.show" v-for="nonlist in nonlists" :key="nonlist._id">
              <div class="non_add_title" style="font-weight:bold;">{{ nonlist.name }}</div>
              <div class="non_add_content" v-for="item in nonlist.items" :key="item._id">
                <div class="non_add_item">{{ item.title }}</div>
                <div class="non_add_item">{{ item.method }}</div>
                <div class="non_add_item">{{ item.professor }}</div>
                <div class="non_add_item">
                  <span>{{ item.class }}</span>
                  <span class="bibutton">
                    <button class="plus">+</button>
                    <button class="delete">-</button>
                    <button class="deletedb">X</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import App from '../App.vue'
import table1 from './table1.vue'
import table2 from './table2.vue'
import table3 from './table3.vue'

export default {
  name: 'whole',
  components: {
    'table1': table1,
    'table2': table2,
    'table3': table3
  },
  data () {
    return {
      component1: '',
      component2: '',
      component3: '',
      num: 1,
      crucial: [],
      subject: [],
      grade: [],
      activetab_1: 1,
      activetab_2: 1,
      activetab_3: 1,
      slists: [
        {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터',show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더',show: false,
          items: []
        }, {category: 'biology', name: '생물',show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)',show: false,
          items: []
        }, {category: 'music', name: '음악',show: false,
          items: []
        }, {category: 'society', name: '인문사회',show: false,
          items: []
        }, {category: 'startup', name: '창업리더',show: false,
          items: []
        }, {category: 'sports', name: '체육',show: false,
          items: []
        }, {category: 'statics', name: '통계',show: false,
          items: []
        }, {category: 'chemistry', name: '화학',show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN',show: false,
          items: []
        }, {category: 'tech', name: '기술경영',show: false,
          items: []
        }, {category: 'design', name: '디자인 사고',show: false,
          items: []
        }, {category: 'leadership', name: '리더십',show: false,
          items: []
        }
      ],
      esslists: [
       {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터', show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더', show: false,
          items: []
        }, {category: 'biology', name: '생물', show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)', show: false,
          items: []
        }, {category: 'music', name: '음악', show: false,
          items: []
        }, {category: 'society', name: '인문사회', show: false,
          items: []
        }, {category: 'startup', name: '창업리더', show: false,
          items: []
        }, {category: 'sports', name: '체육', show: false,
          items: []
        }, {category: 'statics', name: '통계', show: false,
          items: []
        }, {category: 'chemistry', name: '화학', show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN', show: false,
          items: []
        }, {category: 'tech', name: '기술경영', show: false,
          items: []
        }, {category: 'design', name: '디자인 사고', show: false,
          items: []
        }, {category: 'leadership', name: '리더십', show: false,
          items: []
        }
      ],
      nonlists: [
        {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터', show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더', show: false,
          items: []
        }, {category: 'biology', name: '생물', show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)', show: false,
          items: []
        }, {category: 'music', name: '음악', show: false,
          items: []
        }, {category: 'society', name: '인문사회', show: false,
          items: []
        }, {category: 'startup', name: '창업리더', show: false,
          items: []
        }, {category: 'sports', name: '체육', show: false,
          items: []
        }, {category: 'statics', name: '통계', show: false,
          items: []
        }, {category: 'chemistry', name: '화학', show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN', show: false,
          items: []
        }, {category: 'tech', name: '기술경영', show: false,
          items: []
        }, {category: 'design', name: '디자인 사고', show: false,
          items: []
        }, {category: 'leadership', name: '리더십', show: false,
          items: []
        }
      ],
      tablelists: [
        {category: 'math', name: '수학',
          items: []
        }, {category: 'computer', name: '컴퓨터',
          items: []
        }, {category: 'english', name: '영어',
          items: []
        }, {category: 'physics', name: '물리',
          items: []
        }, {category: 'noscience', name: '비이공계 리더',
          items: []
        }, {category: 'biology', name: '생물',
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)',
          items: []
        }, {category: 'music', name: '음악',
          items: []
        }, {category: 'society', name: '인문사회',
          items: []
        }, {category: 'startup', name: '창업리더',
          items: []
        }, {category: 'sports', name: '체육',
          items: []
        }, {category: 'statics', name: '통계',
          items: []
        }, {category: 'chemistry', name: '화학',
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN',
          items: []
        }, {category: 'tech', name: '기술경영',
          items: []
        }, {category: 'design', name: '디자인 사고',
          items: []
        }, {category: 'leadership', name: '리더십',
          items: []
        }
      ]
    }
  },
  methods: {
    search: function () {
      this.slists=[
        {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터', show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더', show: false,
          items: []
        }, {category: 'biology', name: '생물', show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)', show: false,
          items: []
        }, {category: 'music', name: '음악', show: false,
          items: []
        }, {category: 'society', name: '인문사회', show: false,
          items: []
        }, {category: 'startup', name: '창업리더', show: false,
          items: []
        }, {category: 'sports', name: '체육', show: false,
          items: []
        }, {category: 'statics', name: '통계', show: false,
          items: []
        }, {category: 'chemistry', name: '화학', show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN', show: false,
          items: []
        }, {category: 'tech', name: '기술경영', show: false,
          items: []
        }, {category: 'design', name: '디자인 사고', show: false,
          items: []
        }, {category: 'leadership', name: '리더십', show: false,
          items: []
        }
      ]
      let data = {
        crucial: this.crucial,
        subject: this.subject,
        grade: this.grade
      }
      axios.post('/api/search', data)
        .then((response) => {
          console.log(response)
          // 조건에 맞는 subject들 response 받으면
          var i = 0
          while (i < response.data.length) { // res
            var j = 0
            while (j < this.slists.length) {
              if (response.data[i].subject == this.slists[j].category) {
                let item = {
                  id: response.data[i].NO,
                  title: response.data[i].title,
                  professor: response.data[i].professor,
                  method: response.data[i].method,
                  class: response.data[i].class
                }
                this.slists[j].items.push(item)
                this.slists[j].show=true
              }
                j++
            }
            i++
          }
          console.log('hi')
          console.log(this.slists)
        })
    },
    insert_bucket_must: function (itemId) {
      let data = {
        item: itemId,
        must: true
      }
      axios.post('/api/insert_bucket', data)
        .then((response)=> {
        })
    },
    insert_bucket_option: function (itemId) {
      let data = {
        item: itemId,
        must: false
      }
      axios.post('/api/insert_bucket', data)
        .then((response) => {})
    },
    load_bucket_must: function () {
      this.esslists = [
        {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터', show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더', show: false,
          items: []
        }, {category: 'biology', name: '생물', show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)', show: false,
          items: []
        }, {category: 'music', name: '음악', show: false,
          items: []
        }, {category: 'society', name: '인문사회', show: false,
          items: []
        }, {category: 'startup', name: '창업리더', show: false,
          items: []
        }, {category: 'sports', name: '체육', show: false,
          items: []
        }, {category: 'statics', name: '통계', show: false,
          items: []
        }, {category: 'chemistry', name: '화학', show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN', show: false,
          items: []
        }, {category: 'tech', name: '기술경영', show: false,
          items: []
        }, {category: 'design', name: '디자인 사고', show: false,
          items: []
        }, {category: 'leadership', name: '리더십', show: false,
          items: []
        }
      ]

      axios.post('/api/load_bucket', { must : true })
        .then((response) =>{
          var i = 0
          console.log("response.data")
          console.log(response.data)
          console.log(response.data.length)
          while (i < response.data.length) { // res
            var j = 0
            while (j < this.esslists.length) {
              if (response.data[i].subject === this.esslists[j].category) {
                let item = {
                  id: response.data[i].NO,
                  title: response.data[i].title,
                  professor: response.data[i].professor,
                  method: response.data[i].method,
                  class: response.data[i].class
                }
                console.log('item')
                console.log(item)
                console.log(response.data[i].subject)
                console.log(this.esslists[j].category)
                this.esslists[j].items.push(item)
                this.esslists[j].show=true
              }
                j++
            }
            console.log('data')
            console.log(response.data[i])
            i++
        }
        console.log("mustbucket")
        console.log(this.esslists)
    })
    },
    load_bucket_option: function () {
      console.log("option")
      this.nonlists = [
        {category: 'math', name: '수학', show: false,
          items: []
        }, {category: 'computer', name: '컴퓨터', show: false,
          items: []
        }, {category: 'english', name: '영어', show: false,
          items: []
        }, {category: 'physics', name: '물리', show: false,
          items: []
        }, {category: 'noscience', name: '비이공계 리더', show: false,
          items: []
        }, {category: 'biology', name: '생물', show: false,
          items: []
        }, {category: 'convergence', name: '융복합(UGRP/기타)', show: false,
          items: []
        }, {category: 'music', name: '음악', show: false,
          items: []
        }, {category: 'society', name: '인문사회', show: false,
          items: []
        }, {category: 'startup', name: '창업리더', show: false,
          items: []
        }, {category: 'sports', name: '체육', show: false,
          items: []
        }, {category: 'statics', name: '통계', show: false,
          items: []
        }, {category: 'chemistry', name: '화학', show: false,
          items: []
        }, {category: 'mirebrain',name: 'MIREBraiN', show: false,
          items: []
        }, {category: 'tech', name: '기술경영', show: false,
          items: []
        }, {category: 'design', name: '디자인 사고', show: false,
          items: []
        }, {category: 'leadership', name: '리더십', show: false,
          items: []
        }
      ]
      axios.post('/api/load_bucket', { must : false })
        .then((response) => {
          var i = 0
          console.log('response.data')
          console.log(response.data)
          while (i < response.data.length) { // res
            var j = 0
            while (j < this.nonlists.length) {
              if (response.data[i].subject === this.nonlists[j].category) {
                let item = {
                  id: response.data[i].NO,
                  title: response.data[i].title,
                  professor: response.data[i].professor,
                  method: response.data[i].method,
                  class: response.data[i].class
                }
                console.log('item')
                console.log(item)
                this.nonlists[j].show=true
                this.nonlists[j].items.push(item)
              }
                j++
            }
            console.log(response.data[i])
            i++
        }
        console.log("optionbucket")
        console.log(this.nonlists)
    })
  },
  insert_timetable: function (data) {
    axios.post('/api/insert_table', data)
      .then((response) => {
      })
  },
  delete_timetable: function(data) {
    axios.post('/api/delete_table', data)
      .then((response) => {
    })
  },
  plus: function() {
    if(this.num===1) {
      this.component1 = table1
    }    
    else if(this.num===2) {
      this.component2 = table2
    }
    else{
      this.component3 = table3
    }
    this.num++
  },
  del: function() {
    this.component3 = ''
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
    width: 1250px;
    grid-template-columns: 500px 750px;
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

  .largebox {
    display: grid;
  }

  .namebox {
    margin: 8px;
    font-weight: bold;
    font-size: 16px;
  }

  .contentbox {
    margin-left: 8px;
    
  }

  .smallbox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 5px;
  }

  .saerch_button {
    display: grid;
  }

  .search {
    background-color: transparent;
    float: right;
  }

  .add_bucket {
    height: 35vh;
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

  .bibutton {
    float: right;
  }

  .essential, .noessential {
    background-color: transparent;
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

  /* ------------------------------------Bucket result tab-------------------------------------- */

  .ess_bucket, .non_bucket {
    height: 49vh;
  }

    .ess_add_list, .non_add_list {
    display: grid;
    margin: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .ess_add_title, .non_add_title {
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .ess_add_content, .non_add_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-left: 10px;
    margin-top: 3px;
    border-top: 1px solid lightgray;
  }

  .ess_add_item, .non_add_item {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .onebutton {
    float: right;
  }

  .plus {
    background-color: transparent;
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
    width: 12.8vh;
    border-radius: 3px;
  }

  .size2 {
    height: 5.66vh;
    width: 12.8vh;
    border-radius: 3px;
  }

  .size3 {
    height: 8.49vh;
    width: 12.8vh;
    border-radius: 3px;
  }

  .size4 {
    height: 11.32vh;
    width: 12.8vh;
    border-radius: 3px;
  }

  .size6 {
    height: 16.98vh;
    width: 12.8vh;
    border-radius: 3px;
  }

  .size8 {
    height: 22.64vh;
    width: 12.8vh;
    border-radius: 3px;
  }

  .delete, .deletedb {
    background-color: transparent;
  }
</style>