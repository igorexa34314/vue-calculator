import CalcBtn from '@/components/UI/CalcBtn.vue';
import DecorEllipse from '@/components/UI/DecorEllipse.vue';

declare module '@vue/runtime-core' {
	export interface GlobalUIComponents {
		CalcBtn: typeof CalcBtn;
		DecorEllipse: typeof DecorEllipse;
	}
}

export default [
	{ name: 'CalcBtn', component: CalcBtn },
	{ name: 'DecorEllipse', component: DecorEllipse }
];
