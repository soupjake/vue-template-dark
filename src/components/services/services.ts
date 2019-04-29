import { Component, Vue } from 'vue-property-decorator';
import { CalendarEvent } from '@/models/calendar_event';

@Component
export default class ServiceComponent extends Vue {
  calendarId: string = "";
  apiKey: string = "";
  events: CalendarEvent[] = [];
  now: Date = new Date();
  nowString: string = "";
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
    this.nowString = this.convertDate();
  }

  send() {
    console.log(this.service);
  }

  next() {
    this.now.setMonth(this.now.getMonth() + 1);
    this.nowString = this.convertDate();    
  }

  prev() {
    this.now.setMonth(this.now.getMonth() - 1);
    this.nowString = this.convertDate();
  }

  getEvents() {
    // Use the below method with your public Google Calender Id and Api Key to get events 
    // this.$http.get("https://www.googleapis.com/calendar/v3/calendars/" + this.calendarId +
    //   "/events?key=" + this.apiKey + "&timeMin=" + (new Date().toISOString()))
    //   .then(response => response.json())
    //   .then(data => {
    //     for (var i = 0; i < data["items"].length; i++) {
    //       var dateString = "date" in data["items"][i]["start"] ? data["items"][i]["start"]["date"] : data["items"][i]["start"]["dateTime"];
    //       this.events.push({
    //         title: data["items"][i]["summary"],
    //         date: dateString,
    //         open: false
    //       });
    //     }
    //   });
  }

  convertDate() {
    return this.now.getFullYear() + "-" + (this.now.getMonth() + 1) + "-"  + this.now.getDate();
  }

  get eventsMap() {
    const map: { [date: string]: CalendarEvent[]; } = {};
    this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
    return map;
  }
}