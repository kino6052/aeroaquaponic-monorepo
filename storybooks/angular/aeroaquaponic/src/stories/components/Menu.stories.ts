// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { MenuComponent } from 'src/app/components/menu/menu.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [MenuComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Menu',
  component: MenuComponent,
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});

export const Menu = Template.bind({});
Menu.args = {
  items: [
    { text: 'Main', link: '#test' },
    { text: 'About Us', link: '#test' },
  ],
  color: 'black',
};
