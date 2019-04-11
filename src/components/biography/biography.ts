import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BiographyComponent extends Vue {
    events: object[] = [
        {
            date: '01/02/2016',
            title: 'Event One',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            date: '06/04/2017',
            title: 'Event Two',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            date: '25/09/2018',
            title: 'Event Three',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            date: '02/02/2019',
            title: 'Event Four',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ];

    skills: object[] = [
        {
            title: 'Skill One',
            rating: 4
        },
        {
            title: 'Skill Two',
            rating: 5
        },
        {
            title: 'Skill Three',
            rating: 3
        },
        {
            title: 'Skill Four',
            rating: 4
        },
    ];

    useDense() {
        if(this.$vuetify.breakpoint.smAndDown){
            return true;
        }
    }
}