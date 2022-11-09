exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchTypeButtons = page.locator('#search-types');
    }
}