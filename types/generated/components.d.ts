import type { Schema, Attribute } from "@strapi/strapi";

export interface ItemIcons extends Schema.Component {
  collectionName: "components_item_icons";
  info: {
    displayName: "icons";
  };
  attributes: {
    src: Attribute.Media<"images" | "files" | "videos" | "audios">;
    alt: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ItemHead extends Schema.Component {
  collectionName: "components_item_heads";
  info: {
    displayName: "head";
    description: "";
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

export interface IntroIntro extends Schema.Component {
  collectionName: "components_intro_intros";
  info: {
    displayName: "Intro";
  };
  attributes: {
    image: Attribute.Component<"image.image">;
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: "components_image_images";
  info: {
    displayName: "image";
    description: "";
  };
  attributes: {
    src: Attribute.Media<"images" | "files" | "videos" | "audios">;
    alt: Attribute.String;
  };
}

export interface GmailGmail extends Schema.Component {
  collectionName: "components_gmail_gmails";
  info: {
    displayName: "Gmail";
  };
  attributes: {
    image: Attribute.Component<"image.image">;
    content: Attribute.String;
    tel: Attribute.String;
  };
}

export interface AddressAddress extends Schema.Component {
  collectionName: "components_address_addresses";
  info: {
    displayName: "Address";
  };
  attributes: {
    image: Attribute.Component<"image.image">;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "item.icons": ItemIcons;
      "item.head": ItemHead;
      "intro.intro": IntroIntro;
      "image.image": ImageImage;
      "gmail.gmail": GmailGmail;
      "address.address": AddressAddress;
    }
  }
}
