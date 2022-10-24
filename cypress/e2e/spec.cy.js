/// <reference types = "cypress"/>

describe('JLR Landing page', () => {

  beforeEach(function () {
    cy.visit('https://www.jaguarlandrover.com/')
    cy.viewport(1664, 864)
  })

  it('verify the title of landing page', () => {
    cy.title().should('eq', 'JLR Corporate Website')
  })

  const expectedText = ['Company', 'BRANDS & SERVICES', 'Innovation', 'People', 'Responsibility', 'Investor Relations', 'NEWS & MEDIA ']

  it('verify the Navigation Items of landing page', () => {
    cy.xpath("//div[@class='navigation__title-holder']//a").each(($ele, index) => {
      expect($ele.text()).to.eq(expectedText[index])
    })
  })

  it('verify the JLR logo of landing page', () => {
    cy.xpath("//a[@class='corp-header__logo']/img").should('be.visible');
  })

  it('verify the Search Item component of landing page', () => {
    cy.get('.desktop-search__icon').click();
    cy.xpath("//li[@class='desktop-search__search']/input").type('Land Rover');
    cy.get('[data-value="Land Rover BAR"] > .navigation-search-list__link').click({force: true});
    cy.url().should('include', 'search');
  })

  const footerItems = ['News', 'Code of Conduct', 'Terms & Conditions', 'Cookie Policy', 'Privacy Policy', 'Contact Us', 'Twitter', 'LinkedIn', 'subscribe']

  it('verify the Footer Items of landing page', () => {
    cy.xpath("//ul[@class='nav navbar-nav']//a").each(($ele, index) => {
      expect($ele.text()).to.eq(footerItems[index])
    })
  })

})