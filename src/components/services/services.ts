import { Component, Vue } from 'vue-property-decorator';
import { CalendarResponse } from '@/models/calendar_response';

@Component
export default class ServiceComponent extends Vue {
  calendarId: string = "superjakegough@googlemail.com";
  apiKey: string = "AIzaSyBvmReU86a01NtFMHZXPD7cMpXbH8T0SCk";
  calendarResponse: CalendarResponse = {
    kind: "",
    etag: "",
    summary: "",
    updated: "",
    timeZone: "",
    accessRole: "",
    defaultReminders: [],
    nextSyncToken: "",
    items: []
  };

  name: string = "";
  email: string = "";
  service: string = "";
  date: string = "";
  time: string = "";
  message: string = "";
  onboarding: number = 0;
  datemodal: boolean = false;
  timemodal: boolean = false;
  services: object[] = [
    {
      title: 'Service One',
      image: 'service1.jpg',
      price: '£30',
      length: '30 mins',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'Service Two',
      image: 'service2.jpg',
      price: '£50',
      length: '1 hour',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'Service Three',
      image: 'service3.jpg',
      price: '£100',
      length: '1.5 hours',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'Service Four',
      image: 'service4.jpg',
      price: '£125',
      length: '2 hours',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];
  
  created() {
    this.getEvents();
  }

  next() {
    this.onboarding = this.onboarding + 1 === this.services.length
      ? 0
      : this.onboarding + 1
  };

  prev() {
    this.onboarding = this.onboarding - 1 < 0
      ? this.services.length - 1
      : this.onboarding - 1
  };

  send() {
    console.log(this.service);
  }

  getEvents() {
    this.$http.get("https://www.googleapis.com/calendar/v3/calendars/" + this.calendarId +
      "/events?key=" + this.apiKey + "&timeMin=" + (new Date().toISOString()))
      .then(response => response.json())
      .then(data => {
        this.calendarResponse = data;
      });
  }
}