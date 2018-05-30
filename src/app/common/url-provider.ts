export class UrlProvider {
  public static getResourceURL(product: any, resourceName) {
    for (const link of product.links) {
      if (link.rel === resourceName) {
        return link.href;
      }
    }
    return '';
  }
}
