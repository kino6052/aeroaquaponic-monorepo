// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { ProfileCardContainerComponent } from 'src/app/composites/profile-card-container/profile-card-container.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ProfileCardContainerComponent, ProfileCardComponent],
    }),
  ],
  title: 'Aeroaquaponic/Composites/ProfileCardContainer',
  component: ProfileCardContainerComponent,
} as Meta;

const Template: Story<ProfileCardContainerComponent> = (
  args: ProfileCardContainerComponent
) => ({
  component: ProfileCardContainerComponent,
  props: args,
});

export const ProfileCardContainer = Template.bind({});
ProfileCardContainer.args = {
  profiles: [
    {
      name: 'Cam Schubert',
      description: 'Medical Scientist',
      imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
      link: '',
    },
    {
      name: 'Kirill Novik',
      description: 'Senior Software Engineer',
      imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
      link: '',
    },
    {
      name: 'Dmitry Dementyev',
      description: 'Senior Researcher in Aquaculture',
      imageUrl: 'https://aeroaquaponic.org/images/dima.png',
      link: '',
    },
    {
      name: 'Dmitry Dementyev',
      description: 'Senior Researcher in Aquaculture',
      imageUrl: 'https://aeroaquaponic.org/images/dima.png',
      link: '',
    },
    {
      name: 'Cam Schubert',
      description: 'Medical Scientist',
      imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
      link: '',
    },
    {
      name: 'Kirill Novik',
      description: 'Senior Software Engineer',
      imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
      link: '',
    },
  ],
};
