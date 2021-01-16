// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { CardsContainerComponent } from 'src/app/composites/cards-container/cards-container.component';
import {
  FooterComponent,
  FooterComponentData,
} from 'src/app/composites/footer/footer.component';
import { ProfileCardContainerComponent } from 'src/app/composites/profile-card-container/profile-card-container.component';
import { AboutComponent } from 'src/app/composites/sections/about/about.component';
import { DonateComponent } from 'src/app/composites/sections/donate/donate.component';
import { MainComponent } from 'src/app/composites/sections/main/main.component';
import { OverviewComponent } from 'src/app/composites/sections/overview/overview.component';
import { ProjectsComponent } from 'src/app/composites/sections/projects/projects.component';
import { SocialComponent } from 'src/app/composites/social/social.component';
import { PageComponent } from 'src/app/pages/page/page.component';
import { VideoModule } from 'src/app/video/video.module';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        PageComponent,
        MainComponent,
        ProjectsComponent,
        AboutComponent,
        MenuComponent,
        HeadingComponent,
        TypographyComponent,
        SpacerComponent,
        SectionComponent,
        TimelineComponent,
        ProfileCardContainerComponent,
        ProfileCardComponent,
        ButtonComponent,
        CardsContainerComponent,
        CardComponent,
        OverviewComponent,
        FooterComponent,
        DonateComponent,
        SocialComponent,
      ],
      imports: [VideoModule],
    }),
  ],
  title: 'Aeroaquaponic/Page',
  component: PageComponent,
} as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  component: PageComponent,
  props: args,
});

export const Page = Template.bind({});
Page.args = {};
