import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Seo } from '../interfaces/seo';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  genrateTags(config:Seo) {
    config = {
      title: "",
      description: "",
      image: "https://www.oncapacitaciones.com/assets/img/logo.svg",
      slug: "/",

      amount:"",
      currency:"",
      brand:"",
      availability:"",
      category:"",
      condition:"",
      retailer_item_id:"",

      index: "index,follow",
      geo_region: "UY-CA",
      geo_placename: "Canelones",
      geo_position: "-34.856165015698224; -56.01084129625638",
      ICBM: "-34.856165015698224, -56.01084129625638",
      phone: "26818368",
      address: "Av.Giannattasio Km18.200",
      ...config
    }

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'robots', content: config.index });
    this.meta.updateTag({ name: 'googlebot', content: config.index });
    this.meta.updateTag({ name: 'geo.region', content: config.geo_region });
    this.meta.updateTag({ name: 'geo.placename', content: config.geo_placename });
    this.meta.updateTag({ name: 'geo.position', content: config.geo_position });
    this.meta.updateTag({ name: 'ICBM', content: config.ICBM });
    this.meta.updateTag({ name: 'addresslocality', content: config.address });
    this.meta.updateTag({ name: 'telephone', content: config.phone });
    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'On Capacitaciones' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: `${config.image}` });
    this.meta.updateTag({ property: 'og:url', content: `https://www.oncapacitaciones.com/${config.slug}` });

    if (config.amount) this.meta.updateTag({ property: 'og:price:amount', content: config.amount });
    if (config.currency) this.meta.updateTag({ property: 'og:price:currency', content: config.currency });
    if (config.brand) this.meta.updateTag({ property: 'product:brand', content: config.brand });
    if (config.availability) this.meta.updateTag({ property: 'product:availability', content: config.availability });
    if (config.category) this.meta.updateTag({ property: 'product:category', content: config.category });
    if (config.condition) this.meta.updateTag({ property: 'product:condition', content: config.condition });
    if (config.amount) this.meta.updateTag({ property: 'product:price:amount', content: config.amount });
    if (config.currency) this.meta.updateTag({ property: 'product:price:currency', content: config.currency });
    if (config.retailer_item_id) this.meta.updateTag({ property: 'product:retailer_item_id', content: config.retailer_item_id });

  }
}
