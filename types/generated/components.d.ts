import type { Schema, Attribute } from '@strapi/strapi';

export interface SlideMember extends Schema.Component {
  collectionName: 'components_slide_members';
  info: {
    displayName: 'member';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    role: Attribute.String;
    position: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SlideComments extends Schema.Component {
  collectionName: 'components_slide_comments';
  info: {
    displayName: 'comments';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    name: Attribute.String;
    position: Attribute.String;
    rating: Attribute.Integer;
    content: Attribute.Text;
  };
}

export interface ShareParagraphItem extends Schema.Component {
  collectionName: 'components_share_paragraph_items';
  info: {
    displayName: 'ParagraphItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ItemHead extends Schema.Component {
  collectionName: 'components_item_heads';
  info: {
    displayName: 'head';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
  };
}

export interface IntroIntro extends Schema.Component {
  collectionName: 'components_intro_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
  };
}

export interface ImageImageLink extends Schema.Component {
  collectionName: 'components_image_image_links';
  info: {
    displayName: 'ImageLink';
  };
  attributes: {
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
    slug: Attribute.String;
  };
}

export interface HomePageWorking extends Schema.Component {
  collectionName: 'components_home_page_workings';
  info: {
    displayName: 'working';
  };
  attributes: {
    intro: Attribute.Component<'share.paragraph-item'>;
    items: Attribute.Component<'share.paragraph-item', true>;
  };
}

export interface HomePageWhyUs extends Schema.Component {
  collectionName: 'components_home_page_whyuses';
  info: {
    displayName: 'whyUs';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'comp.why-us-items', true>;
  };
}

export interface HomePageWhoUs extends Schema.Component {
  collectionName: 'components_home_page_who_us';
  info: {
    displayName: 'whoUs';
    description: '';
  };
  attributes: {
    data: Attribute.Component<'comp.why-us-items', true>;
  };
}

export interface HomePageWebUs extends Schema.Component {
  collectionName: 'components_home_page_webuses';
  info: {
    displayName: 'webUs';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'comp.why-us-items', true>;
    data: Attribute.Component<'comp.why-us-items'>;
  };
}

export interface HomePageProject extends Schema.Component {
  collectionName: 'components_home_page_projects';
  info: {
    displayName: 'project';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'comp.why-us-items', true>;
  };
}

export interface HomePageCustomer extends Schema.Component {
  collectionName: 'components_home_page_customers';
  info: {
    displayName: 'customer';
  };
  attributes: {
    title: Attribute.Component<'share.paragraph-item'>;
    images: Attribute.Component<'image.image', true>;
  };
}

export interface HomePageBannerMain extends Schema.Component {
  collectionName: 'components_home_page_banner_mains';
  info: {
    displayName: 'bannerMain';
    description: '';
  };
  attributes: {
    slug: Attribute.String;
    bannerImage: Attribute.Component<'image.image'>;
    intro: Attribute.Component<'share.paragraph-item'>;
    color: Attribute.Component<'share.paragraph-item'>;
    subImage: Attribute.Component<'image.image'>;
    Text: Attribute.Component<'comp.text'>;
    icon: Attribute.Component<'image.image-link', true>;
    card: Attribute.Component<'comp.card'>;
  };
}

export interface HomePageAboutUs extends Schema.Component {
  collectionName: 'components_home_page_aboutuses';
  info: {
    displayName: 'aboutUs';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    title: Attribute.String;
  };
}

export interface GmailGmail extends Schema.Component {
  collectionName: 'components_gmail_gmails';
  info: {
    displayName: 'Gmail';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    content: Attribute.String;
    tel: Attribute.String;
  };
}

export interface CompWhyUsItems extends Schema.Component {
  collectionName: 'components_comp_why_us_items';
  info: {
    displayName: 'items';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CompText extends Schema.Component {
  collectionName: 'components_comp_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    content: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CompCard extends Schema.Component {
  collectionName: 'components_comp_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    title: Attribute.String;
    price: Attribute.Decimal;
    content: Attribute.String;
  };
}

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slide.member': SlideMember;
      'slide.comments': SlideComments;
      'share.paragraph-item': ShareParagraphItem;
      'item.head': ItemHead;
      'intro.intro': IntroIntro;
      'image.image': ImageImage;
      'image.image-link': ImageImageLink;
      'home-page.working': HomePageWorking;
      'home-page.why-us': HomePageWhyUs;
      'home-page.who-us': HomePageWhoUs;
      'home-page.web-us': HomePageWebUs;
      'home-page.project': HomePageProject;
      'home-page.customer': HomePageCustomer;
      'home-page.banner-main': HomePageBannerMain;
      'home-page.about-us': HomePageAboutUs;
      'gmail.gmail': GmailGmail;
      'comp.why-us-items': CompWhyUsItems;
      'comp.text': CompText;
      'comp.card': CompCard;
      'address.address': AddressAddress;
    }
  }
}
