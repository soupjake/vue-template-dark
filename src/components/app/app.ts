import { Component, Vue } from 'vue-property-decorator';
import { MenuItem } from '@/models/menu_item';
import NavMenu from '@/components/navmenu/navmenu';

@Component ({
  components: {
		NavMenu,
	}
})
export default class AppComponent extends Vue {
  drawer: boolean = false;

  menuItems: MenuItem[] = [
      new MenuItem('Home', '/'),
      new MenuItem('Training & Nutrition', '/training'),
      new MenuItem('Specialist', '/specialist'),
      new MenuItem('Blog', '/blog')
    ];
}