import type { Schema, Attribute } from '@strapi/strapi';

export interface SlideMember extends Schema.Component {
  collectionName: 'components_slide_members';
  info: {
    displayName: 'member';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    name: Attribute.String;
    description: Attribute.Text;
    position: Attribute.String;
    role: Attribute.String;
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

export interface ServicePageWhyUs extends Schema.Component {
  collectionName: 'components_service_page_whyuses';
  info: {
    displayName: 'whyUs';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'comp.item1s', true>;
  };
}

export interface ServicePageSolution extends Schema.Component {
  collectionName: 'components_service_page_solutions';
  info: {
    displayName: 'solution';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'share.paragraph-item', true>;
  };
}

export interface ServicePageHelp extends Schema.Component {
  collectionName: 'components_service_page_helps';
  info: {
    displayName: 'help';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'comp.item2s', true>;
  };
}

export interface ItemIcons extends Schema.Component {
  collectionName: 'components_item_icons';
  info: {
    displayName: 'icons';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    slug: Attribute.String;
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
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
  };
}

export interface HomePageWorking extends Schema.Component {
  collectionName: 'components_home_page_workings';
  info: {
    displayName: 'working';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'share.paragraph-item', true>;
    title: Attribute.String;
    description: Attribute.Text;
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

export interface HomePageWebUs extends Schema.Component {
  collectionName: 'components_home_page_webuses';
  info: {
    displayName: 'webUs';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'comp.why-us-items', true>;
    intro: Attribute.Component<'comp.why-us-items'>;
  };
}

export interface HomePageProject extends Schema.Component {
  collectionName: 'components_home_page_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    items: Attribute.Component<'comp.why-us-items', true>;
  };
}

export interface HomePageMain extends Schema.Component {
  collectionName: 'components_home_page_mains';
  info: {
    displayName: 'main';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'comp.why-us-items'>;
    url: Attribute.String;
    color: Attribute.Component<'share.paragraph-item'>;
    order: Attribute.Component<'comp.order'>;
    subImg: Attribute.Component<'image.image'>;
    text: Attribute.Component<'comp.text'>;
    icons: Attribute.Component<'image.image', true>;
    card: Attribute.Component<'comp.cart'>;
    actor: Attribute.String;
  };
}

export interface HomePageCustomer extends Schema.Component {
  collectionName: 'components_home_page_customers';
  info: {
    displayName: 'customer';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'image.image', true>;
    description: Attribute.Text;
    title: Attribute.String;
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

export interface ContactUsPageMap extends Schema.Component {
  collectionName: 'components_contact_us_page_maps';
  info: {
    displayName: 'map';
    description: '';
  };
  attributes: {
    urlMap: Attribute.String;
    logo: Attribute.Component<'image.image'>;
    address: Attribute.String;
    phone: Attribute.String;
    time: Attribute.String;
  };
}

export interface ContactUsPageFolow extends Schema.Component {
  collectionName: 'components_contact_us_page_folows';
  info: {
    displayName: 'folow';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'image.image'>;
    icons: Attribute.Component<'item.icons', true>;
  };
}

export interface CompWhyUsItems extends Schema.Component {
  collectionName: 'components_comp_why_us_items';
  info: {
    displayName: 'items';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
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

export interface CompOrder extends Schema.Component {
  collectionName: 'components_comp_orders';
  info: {
    displayName: 'order';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
    price: Attribute.Float;
    percent: Attribute.Float;
  };
}

export interface CompItem2S extends Schema.Component {
  collectionName: 'components_comp_item2s';
  info: {
    displayName: 'item2s';
  };
  attributes: {
    icon: Attribute.Component<'image.image'>;
    bg: Attribute.Component<'image.image'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CompItem1S extends Schema.Component {
  collectionName: 'components_comp_item1s';
  info: {
    displayName: 'item1s';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    title: Attribute.String;
  };
}

export interface CompEbook extends Schema.Component {
  collectionName: 'components_comp_ebooks';
  info: {
    displayName: 'ebook';
    icon: 'apps';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
    titleBook: Attribute.String;
    descBook: Attribute.Text;
    note: Attribute.Text;
    option: Attribute.Text;
    pdfFile: Attribute.Media<'files'>;
  };
}

export interface CompCart extends Schema.Component {
  collectionName: 'components_comp_carts';
  info: {
    displayName: 'cart';
    description: '';
  };
  attributes: {
    src: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
    title: Attribute.String;
    price: Attribute.BigInteger;
    description: Attribute.Text;
  };
}

export interface ArticleTypeOrder extends Schema.Component {
  collectionName: 'components_article_type_orders';
  info: {
    displayName: 'typeOrder';
  };
  attributes: {
    detail: Attribute.RichText;
  };
}

export interface ArticleEbook extends Schema.Component {
  collectionName: 'components_article_ebooks';
  info: {
    displayName: 'ebook';
  };
  attributes: {
    intro: Attribute.Component<'share.paragraph-item'>;
    ebook: Attribute.Component<'comp.ebook'>;
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

export interface AboutUsPageTeam extends Schema.Component {
  collectionName: 'components_about_us_page_teams';
  info: {
    displayName: 'team';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'image.image', true>;
  };
}

export interface AboutUsPageTaget extends Schema.Component {
  collectionName: 'components_about_us_page_tagets';
  info: {
    displayName: 'taget';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'comp.item1s'>;
    items: Attribute.Component<'share.paragraph-item', true>;
  };
}

export interface AboutUsPageMeet extends Schema.Component {
  collectionName: 'components_about_us_page_meets';
  info: {
    displayName: 'meet';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    members: Attribute.Component<'slide.member', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slide.member': SlideMember;
      'slide.comments': SlideComments;
      'share.paragraph-item': ShareParagraphItem;
      'service-page.why-us': ServicePageWhyUs;
      'service-page.solution': ServicePageSolution;
      'service-page.help': ServicePageHelp;
      'item.icons': ItemIcons;
      'item.head': ItemHead;
      'intro.intro': IntroIntro;
      'image.image': ImageImage;
      'home-page.working': HomePageWorking;
      'home-page.why-us': HomePageWhyUs;
      'home-page.web-us': HomePageWebUs;
      'home-page.project': HomePageProject;
      'home-page.main': HomePageMain;
      'home-page.customer': HomePageCustomer;
      'home-page.about-us': HomePageAboutUs;
      'gmail.gmail': GmailGmail;
      'contact-us-page.map': ContactUsPageMap;
      'contact-us-page.folow': ContactUsPageFolow;
      'comp.why-us-items': CompWhyUsItems;
      'comp.text': CompText;
      'comp.order': CompOrder;
      'comp.item2s': CompItem2S;
      'comp.item1s': CompItem1S;
      'comp.ebook': CompEbook;
      'comp.cart': CompCart;
      'article.type-order': ArticleTypeOrder;
      'article.ebook': ArticleEbook;
      'address.address': AddressAddress;
      'about-us-page.team': AboutUsPageTeam;
      'about-us-page.taget': AboutUsPageTaget;
      'about-us-page.meet': AboutUsPageMeet;
    }
  }
}
