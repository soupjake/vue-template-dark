import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue {
    $refs!: {
        whoBox: HTMLBodyElement,
        whatBox: HTMLBodyElement
    }
    items: object[] = [
        {
            title: 'What You Do One',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'What You Do Two',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'What You Do Three',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'What You Do Four',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ];
    panel: boolean[] = [ true, false, false, false ];

    name: string = "";
    email: string = "";
    subject: string = "";
    message: string = "";

    getBackground(i: number){
        if(!this.panel[i]){
            return "transparent";
        }
    }
}