<template>
  <div>
    <top/>
	<section class="flex container">
		<left/>
		<!-- 컨텐츠 영역 시작 -->
		<section class="contents admin">
            <h1>증빙서류 목록</h1>
            <section class="search-box mt20">				
                <div class="search-group">
                    <div class="subject">아이디/이름</div>			
                    <select title="아이디/이름 검색">
                        <option>아이디</option>
                        <option>이름</option>						
                    </select>
                    <input type="text" class="search-text ml15"/>
                    <button type="button" class="btn-search ml13"><i></i>조회</button>
                </div>
            </section>
            <div class="flex-between mt30">
                <div class="total mt15">총 <span>15</span>건</div>
                <router-link to="/adminwrite"><button type="button" class="btn-reg">신규등록</button></router-link>
            </div>
            
            <div class="tbl-wrap mt15">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" class="tbl-basic">
                    <colgroup>
                        <col width="10%"/>
                        <col width="18%"/>
                        <col width="18%"/>
                        <col width="18%"/>
                        <col width="18%"/>
                        <col width="18%"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>직책</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>							
                            <td>12</td>
                            <td>kakfw</td>
                            <td>홍길동</td>
                            <td>010-111-1111</td>
                            <td>보험책임자</td>
                            <td><a href="javascript:;" class="btn-view">보기</a></td>
                        </tr>
                        <tr>							
                            <td>12</td>
                            <td>kakfw</td>
                            <td>홍길동</td>
                            <td>010-111-1111</td>
                            <td>보험책임자</td>
                            <td><a href="javascript:;" class="btn-view">보기</a></td>
                        </tr>
                    </tbody>
                </table>
                <section class="pageing">
                    <div class="page-align">
                        <span class="first"></span>
                        <span class="prev"></span>
                        <span class="num">
                            <span>1</span>
                            <span class="active">2</span>
                        </span>
                        <span class="next"></span>
                        <span class="last"></span>
                    </div>
                </section>
            </div>
        </section>
		<!-- 컨텐츠 영역 끝 -->
	</section>
	<!-- 메뉴 디폴트 설정 -->
  </div>
</template>

<script>
import top from '../components/top';
import left from '../components/left';
export default {
    components :{
        top,
        left
    }
}
</script>

<style>

</style>