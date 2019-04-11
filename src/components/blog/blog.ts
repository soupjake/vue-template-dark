import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BlogComponent extends Vue {
    values1: number[] = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0];
    values2: number[] = [0, 3, 4, 6, 2, 5, 10, 1, 3, 5, 7, 0, 0, 7, 4];
    values3: number[] = [8, 5, 2, 3, 3, 4, 2, 4, 6, 1, 8, 9, 7, 1, 3];
    gradient: string[] = ['#00c6ff', '#F0F', '#FF0'];
}