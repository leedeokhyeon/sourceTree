<template>
  <div>
    <top/>
	<section class="flex container">
		<left/>
		<!-- 컨텐츠 영역 시작 -->
		<section class="contents admin">
			<h2><span>관리자 목록 &gt; </span> 신규 등록</h2>
			<table cellpadding="0" cellspacing="0" border="0" width="100%" class="tbl-read admin-reg mt30">
				<colgroup>
					<col width="150"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<td>아이디</td>
						<td><input type="text" v-model="input1" placeholder="아이디를 입력해주세요.(영문,숫자)"/></td>
					</tr>
					<tr>
						<td>이름</td>
						<td><input type="text" v-model="list[0].name" placeholder="이름을 입력해주세요."/></td>
					</tr>
					<tr>
						<td>전화번호</td>
						<td><input type="text" placeholder="전화번호를 입력해주세요."/></td>
					</tr>
					<tr>
						<td>직책</td>
						<td>
							<select title="직책">
								<option>직책을 선택해주세요.</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>비밀번호</td>
						<td><input type="password" placeholder="비밀번호를 입력해주세요."/></td>
					</tr>
					<tr>
						<td>비밀번호 확인</td>
						<td><input type="password" placeholder="비밀번호를 다시 입력해주세요."/></td>
					</tr>
				</tbody>
			</table>
			<div class="btn-group mt20 flex-between">
				<div>
					<router-link to="/adminlist"><a href="javascript:;" class="btn-list">목록</a></router-link>
				</div>
				<div>
					<button type="button" class="btn-complete" @click="click">등록</button>
				</div>
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
	data(){
		return {
			input1:"titleist",
			list : [
				{name: '이덕현',
				gender: '남자',
				address : '하남',
				}
			],
		};
	},
	methods: {
		click(){
			// console.log(this.list[0].name);
			// console.log(this.input1);
			this.input1 = '1234'
			this.list[0].name = '현덕이'
		}
	},
    components :{
        top,
        left
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('created');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		console.log('mounted');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	},
	beforeDestroy() {
		console.log('beforeDestroy');
	},
	destroyed() {
		console.log('destroyed');
	},
	watch:{
		input1(){

		}
	}
}
</script>

<style>

</style>