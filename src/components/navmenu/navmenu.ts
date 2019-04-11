import { Component, Vue } from 'vue-property-decorator';
import { MenuItem } from '@/models/menu_item';

@Component
export default class NavMenuComponent extends Vue {
    menuItems: MenuItem[] = [
        new MenuItem('Home', '/'),
        new MenuItem('Services', '/services'),
        new MenuItem('Biography', '/biography'),
        new MenuItem('Blog', '/blog')
      ]
}