 
 class InventoryPage {
    elements = {
        pageContainer : () => cy.get('#inventory_container'),   
       }

       expectInventoryPageIsDisplayed() {
        this.elements.pageContainer().should('be.visible');
       }
 }

 const inventoryPage = new InventoryPage();
 export { inventoryPage };