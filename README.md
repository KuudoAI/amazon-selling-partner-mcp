# Amazon Seller Central MCP server (Amazon Selling Partner MCP) by Kuudo

One MCP for the entire Amazon Selling Partner API: 304 operations across 40+ services, from Catalog, Listings, and Orders to FBA and A+ Content.

[![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-8A2BE2?style=flat-square)](https://modelcontextprotocol.io/) [![Registry](https://img.shields.io/badge/MCP%20Registry-io.github.KuudoAI%2Famazon-selling-partner-mcp-blue?style=flat-square)](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.KuudoAI%2Famazon-selling-partner-mcp&version=latest) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE) [![Community](https://img.shields.io/badge/Kuudo-community-D97757?style=flat-square)](https://github.com/KuudoAI/community)

Product page: https://www.kuudo.com/features/amazon-selling-partner-mcp/ · Docs: https://www.kuudo.com/docs/mcp-reference/amazon-sp-tools/ · Pricing: https://www.kuudo.com/pricing.md

## Connect

Kuudo runs in your own cloud. The Community plan deploys one instance of each Amazon MCP server into your account, and your client connects to that deployment:

```json
{
  "mcpServers": {
    "amazon-selling-partner-mcp": {
      "url": "https://<your-host>/mcp",
      "headers": {
        "Authorization": "Bearer <your Kuudo API key>"
      }
    }
  }
}
```

Replace `<your-host>` with the hostname of your deployment and the bearer value with your Kuudo API key.

## What this repository is

This repository holds registry metadata and a catalog-only stub. Live execution runs in your Kuudo deployment. The server source is not published. The stub in `src/` answers `tools/list` with the catalog below, serves the same catalog as one resource (`kuudo://catalog/tools.json`), offers one prompt (`connect`) carrying the setup guidance, and returns an error with that guidance on any call, so registries and clients can inspect the surface without any access to Amazon.

### Inspect the catalog locally with Docker

The image runs the same catalog-only stub over stdio. It is not the live server.

```bash
docker build -t amazon-selling-partner-mcp .
docker run -i --rm amazon-selling-partner-mcp
```

Point a client at it with a stdio entry:

```json
{
  "mcpServers": {
    "amazon-selling-partner-mcp-catalog": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "amazon-selling-partner-mcp"]
    }
  }
}
```

## Tools

304 API operations exposed as 303 tools across 51 Selling Partner API resources. Two operations share one name and collapse into one tool. The production server's built-in setup and status tools are not listed here.

Argument schemas are not published in this catalog: every tool carries an empty object schema, and the live server in your deployment validates the real parameters on each call.

| Resource | Operations |
| --- | ---: |
| AplusContent | 10 |
| AppIntegrations | 3 |
| ApplicationManagement | 1 |
| Awd | 11 |
| CatalogItems | 2 |
| CatalogItems20201201 | 2 |
| CatalogItemsV0 | 1 |
| CustomerFeedback | 7 |
| DataKiosk | 5 |
| DeliveryByAmazon | 2 |
| EasyShip | 5 |
| ExternalFulfillmentInventory | 1 |
| ExternalFulfillmentReturns | 2 |
| ExternalFulfillmentShipments | 10 |
| FbaInboundEligibility | 1 |
| FbaInventory | 4 |
| Feeds | 6 |
| Fees | 3 |
| Finances | 1 |
| FinancesV0 | 4 |
| FulfillmentInbound | 45 |
| FulfillmentInboundV0 | 6 |
| FulfillmentOutbound | 14 |
| Invoices | 10 |
| ListingsItems | 5 |
| ListingsItems20200901 | 3 |
| ListingsRestrictions | 1 |
| MerchantFulfillment | 5 |
| Messaging | 12 |
| Notifications | 8 |
| Orders | 10 |
| Ordersv2 | 2 |
| ProductPricing | 6 |
| ProductPricing20220501 | 2 |
| ProductType | 2 |
| Replenishment | 3 |
| Replenishment20221107 | 3 |
| Reports | 9 |
| Sales | 1 |
| Sellers | 2 |
| SellerWallet | 12 |
| Services | 17 |
| ShipmentInvoicing | 3 |
| Shipping | 20 |
| ShippingLegacy | 9 |
| Solicitations | 2 |
| SupplySources | 6 |
| Tokens | 1 |
| Transfers | 2 |
| Uploads | 1 |
| Vehicles | 1 |

<details>
<summary>Every operation (303)</summary>

| Tool | Access | What it does |
| --- | --- | --- |
| `AplusContent_validateContentDocumentAsinRelations` | write | Checks if the A+ Content document is valid for use on a set of ASINs. |
| `AplusContent_searchContentDocuments` | read | Returns a list of all A+ Content documents, including metadata, that are assigned to a selling partner. |
| `AplusContent_createContentDocument` | write | Creates a new A+ Content document. |
| `AplusContent_getContentDocument` | read | Returns an A+ Content document, if available. |
| `AplusContent_updateContentDocument` | write | Updates an existing A+ Content document. |
| `AplusContent_postContentDocumentApprovalSubmission` | write | Submits an A+ Content document for review, approval, and publishing. |
| `AplusContent_listContentDocumentAsinRelations` | read | Returns a list of ASINs that are related to the specified A+ Content document, if available. |
| `AplusContent_postContentDocumentAsinRelations` | write | Replaces all ASINs related to the specified A+ Content document, if available. |
| `AplusContent_postContentDocumentSuspendSubmission` | write | Submits a request to suspend visible A+ Content. |
| `AplusContent_searchContentPublishRecords` | read | Searches for A+ Content publishing records, if available. |
| `AppIntegrations_createNotification` | write | Create a notification for sellers in Seller Central. |
| `AppIntegrations_deleteNotifications` | write | Remove your application's notifications from the Appstore notifications dashboard. |
| `AppIntegrations_recordActionFeedback` | write | Records the seller's response to a notification. |
| `ApplicationManagement_rotateApplicationClientSecret` | write | Rotates application client secrets for a developer application. |
| `Awd_checkInboundEligibility` | write | Determines if the packages you specify are eligible for an AWD inbound order and contains error details for ineligible packages. |
| `Awd_createInbound` | write | Creates a draft AWD inbound order with a list of packages for inbound shipment. |
| `Awd_getInbound` | read | Retrieves an AWD inbound order. |
| `Awd_updateInbound` | write | Updates an AWD inbound order that is in DRAFT status and not yet confirmed. |
| `Awd_cancelInbound` | write | Cancels an AWD Inbound order and its associated shipment. |
| `Awd_confirmInbound` | write | Confirms an AWD inbound order in DRAFT status. |
| `Awd_listInboundShipments` | read | Retrieves a summary of all the inbound AWD shipments associated with a merchant, with the ability to apply optional filters. |
| `Awd_getInboundShipment` | read | Retrieves an AWD inbound shipment. |
| `Awd_getInboundShipmentLabels` | read | Retrieves the box labels for a shipment ID that you specify. |
| `Awd_updateInboundShipmentTransportDetails` | write | Updates transport details for an AWD shipment. |
| `Awd_listInventory` | read | Lists AWD inventory associated with a merchant with the ability to apply optional filters. |
| `CatalogItems_searchCatalogItems` | read | Search for a list of Amazon catalog items and item-related information. |
| `CatalogItems_getCatalogItem` | read | Retrieves details for an item in the Amazon catalog. |
| `CatalogItems20201201_searchCatalogItems` | read | Search for and return a list of Amazon catalog items and associated information. |
| `CatalogItems20201201_getCatalogItem` | read | Retrieves details for an item in the Amazon catalog. |
| `CatalogItemsV0_listCatalogCategories` | read | Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU. |
| `CustomerFeedback_getBrowseNodeReturnTopics` | read | Retrieve the topics that customers mention when they return items in a browse node. |
| `CustomerFeedback_getBrowseNodeReturnTrends` | read | Retrieve the trends of topics that customers mention when they return items in a browse node. |
| `CustomerFeedback_getBrowseNodeReviewTopics` | read | Retrieve a browse node's ten most positive and ten most negative review topics. |
| `CustomerFeedback_getBrowseNodeReviewTrends` | read | Retrieve the positive and negative review trends of items in a browse node for the past six months. |
| `CustomerFeedback_getItemBrowseNode` | read | This API returns the associated browse node of the requested ASIN. |
| `CustomerFeedback_getItemReviewTopics` | read | Retrieve an item's ten most positive and ten most negative review topics. |
| `CustomerFeedback_getItemReviewTrends` | read | Retrieve an item's positive and negative review trends for the past six months. |
| `DataKiosk_getDocument` | read | Returns the information required for retrieving a Data Kiosk document's contents. |
| `DataKiosk_getQueries` | read | Returns details for the Data Kiosk queries that match the specified filters. |
| `DataKiosk_createQuery` | write | Creates a Data Kiosk query request. |
| `DataKiosk_cancelQuery` | write | Cancels the query specified by the queryId parameter. |
| `DataKiosk_getQuery` | read | Returns query details for the query specified by the queryId parameter. |
| `DeliveryByAmazon_submitInvoice` | write | Submits a shipment invoice for a given order or shipment. |
| `DeliveryByAmazon_getInvoiceStatus` | read | Returns the invoice status for the order or shipment you specify. |
| `EasyShip_getScheduledPackage` | read | Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status. |
| `EasyShip_updateScheduledPackages` | write | Updates the time slot for handing over the package indicated by the specified scheduledPackageId. |
| `EasyShip_createScheduledPackage` | write | Schedules an Easy Ship order and returns the scheduled package information. |
| `EasyShip_createScheduledPackageBulk` | write | This operation automatically schedules a time slot for all the amazonOrderIds given as input, generating the associated shipping labels, along with other compliance documents according to the… |
| `EasyShip_listHandoverSlots` | read | Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies. |
| `ExternalFulfillmentInventory_batchInventory` | write | Make up to 10 inventory requests. |
| `ExternalFulfillmentReturns_listReturns` | read | Retrieve a list of return items. |
| `ExternalFulfillmentReturns_getReturn` | read | Retrieve the return item with the specified ID. |
| `ExternalFulfillmentShipments_getShipments` | read | Get a list of shipments created for the seller in the status you specify. |
| `ExternalFulfillmentShipments_getShipment` | read | Get a single shipment with the ID you specify. |
| `ExternalFulfillmentShipments_processShipment` | write | Confirm or reject the specified shipment. |
| `ExternalFulfillmentShipments_retrieveInvoice` | read | Retrieve invoices for the shipment you specify. |
| `ExternalFulfillmentShipments_generateInvoice` | write | Get invoices for the shipment you specify. |
| `ExternalFulfillmentShipments_createPackages` | write | Provide details about the packages in the specified shipment. |
| `ExternalFulfillmentShipments_updatePackageStatus` | write | Updates the status of the packages. |
| `ExternalFulfillmentShipments_updatePackage` | write | Updates the details about the packages that will be used to fulfill the specified shipment. |
| `ExternalFulfillmentShipments_generateShipLabels` | write | Generate and retrieve all shipping labels for one or more packages in the shipment you specify. |
| `ExternalFulfillmentShipments_retrieveShippingOptions` | read | Get a list of shipping options for a package in a shipment given the shipment's marketplace and channel. |
| `FbaInboundEligibility_getItemEligibilityPreview` | read | This operation gets an eligibility preview for an item that you specify. |
| `FbaInventory_createInventoryItem` | write | Requests that Amazon create product-details in the Sandbox Inventory in the sandbox environment. |
| `FbaInventory_addInventory` | write | Requests that Amazon add items to the Sandbox Inventory with desired amount of quantity in the sandbox environment. |
| `FbaInventory_deleteInventoryItem` | write | Requests that Amazon Deletes an item from the Sandbox Inventory in the sandbox environment. |
| `FbaInventory_getInventorySummaries` | read | Returns a list of inventory summaries. |
| `Feeds_createFeedDocument` | write | Creates a feed document for the feed type that you specify. |
| `Feeds_getFeedDocument` | read | Returns the information required for retrieving a feed document's contents. |
| `Feeds_getFeeds` | read | Returns feed details for the feeds that match the filters that you specify. |
| `Feeds_createFeed` | write | Creates a feed. |
| `Feeds_cancelFeed` | write | Cancels the feed that you specify. |
| `Feeds_getFeed` | read | Returns feed details (including the resultDocumentId, if available) for the feed that you specify. |
| `Fees_getMyFeesEstimates` | read | Returns the estimated fees for a list of products. |
| `Fees_getMyFeesEstimateForASIN` | read | Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body. |
| `Fees_getMyFeesEstimateForSKU` | read | Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body. |
| `Finances_listTransactions` | read | Returns transactions for the given parameters. |
| `FinancesV0_listFinancialEventGroups` | read | Returns financial event groups for a given date range. |
| `FinancesV0_listFinancialEventsByGroupId` | read | Returns all financial events for the specified financial event group. |
| `FinancesV0_listFinancialEvents` | read | Returns financial events for the specified data range. |
| `FinancesV0_listFinancialEventsByOrderId` | read | Returns all financial events for the specified order. |
| `FulfillmentInbound_listInboundPlans` | read | Provides a list of inbound plans with minimal information. |
| `FulfillmentInbound_createInboundPlan` | write | Creates an inbound plan. |
| `FulfillmentInbound_getInboundPlan` | read | Fetches the top level information about an inbound plan. |
| `FulfillmentInbound_listInboundPlanBoxes` | read | Provides a paginated list of box packages in an inbound plan. |
| `FulfillmentInbound_cancelInboundPlan` | write | Cancels an Inbound Plan. |
| `FulfillmentInbound_listInboundPlanItems` | read | Provides a paginated list of item packages in an inbound plan. |
| `FulfillmentInbound_updateInboundPlanName` | write | Updates the name of an existing inbound plan. |
| `FulfillmentInbound_listPackingGroupBoxes` | read | Retrieves a page of boxes from a given packing group. |
| `FulfillmentInbound_listPackingGroupItems` | read | Retrieves a page of items in a given packing group. |
| `FulfillmentInbound_setPackingInformation` | write | Sets packing information for an inbound plan. |
| `FulfillmentInbound_listPackingOptions` | read | Retrieves a list of all packing options for an inbound plan. |
| `FulfillmentInbound_generatePackingOptions` | write | Generates available packing options for the inbound plan. |
| `FulfillmentInbound_confirmPackingOption` | write | Confirms the packing option for an inbound plan. |
| `FulfillmentInbound_listInboundPlanPallets` | read | Provides a paginated list of pallet packages in an inbound plan. |
| `FulfillmentInbound_listPlacementOptions` | read | Provides a list of all placement options for an inbound plan. |
| `FulfillmentInbound_generatePlacementOptions` | write | Generates placement options for the inbound plan. |
| `FulfillmentInbound_confirmPlacementOption` | write | Confirms the placement option for an inbound plan. |
| `FulfillmentInbound_getShipment` | read | Provides the full details for a specific shipment within an inbound plan. |
| `FulfillmentInbound_listShipmentBoxes` | read | Provides a paginated list of box packages in a shipment. |
| `FulfillmentInbound_listShipmentContentUpdatePreviews` | read | Retrieve a paginated list of shipment content update previews for a given shipment. |
| `FulfillmentInbound_generateShipmentContentUpdatePreviews` | write | Generate a shipment content update preview given a set of intended boxes and/or items for a shipment with a confirmed carrier. |
| `FulfillmentInbound_getShipmentContentUpdatePreview` | read | Retrieve a shipment content update preview which provides a summary of the requested shipment content changes along with the transportation cost implications of the change that can only be confirmed… |
| `FulfillmentInbound_confirmShipmentContentUpdatePreview` | write | Confirm a shipment content update preview and accept the changes in transportation cost. |
| `FulfillmentInbound_getDeliveryChallanDocument` | read | Provide delivery challan document for PCP transportation in IN marketplace. |
| `FulfillmentInbound_listDeliveryWindowOptions` | read | Retrieves all delivery window options for a shipment. |
| `FulfillmentInbound_generateDeliveryWindowOptions` | write | Generates available delivery window options for a given shipment. |
| `FulfillmentInbound_confirmDeliveryWindowOptions` | write | Confirms the delivery window option for chosen shipment within an inbound plan. |
| `FulfillmentInbound_listShipmentItems` | read | Provides a paginated list of item packages in a shipment. |
| `FulfillmentInbound_updateShipmentName` | write | Updates the name of an existing shipment. |
| `FulfillmentInbound_listShipmentPallets` | read | Provides a paginated list of pallet packages in a shipment. |
| `FulfillmentInbound_cancelSelfShipAppointment` | write | Cancels a self-ship appointment slot against a shipment. |
| `FulfillmentInbound_getSelfShipAppointmentSlots` | read | Retrieves a list of available self-ship appointment slots used to drop off a shipment at a warehouse. |
| `FulfillmentInbound_generateSelfShipAppointmentSlots` | write | Initiates the process of generating the appointment slots list. |
| `FulfillmentInbound_scheduleSelfShipAppointment` | write | Confirms or reschedules a self-ship appointment slot against a shipment. |
| `FulfillmentInbound_updateShipmentSourceAddress` | write | Updates the source address of an existing shipment. |
| `FulfillmentInbound_updateShipmentTrackingDetails` | write | Updates a shipment's tracking details. |
| `FulfillmentInbound_listTransportationOptions` | read | Retrieves all transportation options for a shipment. |
| `FulfillmentInbound_generateTransportationOptions` | write | Generates available transportation options for a given placement option. |
| `FulfillmentInbound_confirmTransportationOptions` | write | Confirms all the transportation options for an inbound plan. |
| `FulfillmentInbound_listItemComplianceDetails` | read | List the inbound compliance details for MSKUs in a given marketplace. |
| `FulfillmentInbound_updateItemComplianceDetails` | write | Update compliance details for a list of MSKUs. |
| `FulfillmentInbound_createMarketplaceItemLabels` | write | For a given marketplace - creates labels for a list of MSKUs. |
| `FulfillmentInbound_listPrepDetails` | read | Get preparation details for a list of MSKUs in a specified marketplace.\n\nNote: MSKUs that contain certain characters must be encoded. |
| `FulfillmentInbound_setPrepDetails` | write | Set the preparation details for a list of MSKUs in a specified marketplace. |
| `FulfillmentInbound_getInboundOperationStatus` | read | Gets the status of the processing of an asynchronous API call. |
| `FulfillmentInboundV0_getPrepInstructions` | read | Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon's fulfillment network. |
| `FulfillmentInboundV0_getShipmentItems` | read | Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame. |
| `FulfillmentInboundV0_getShipments` | read | Returns a list of inbound shipments based on criteria that you specify. |
| `FulfillmentInboundV0_getBillOfLading` | read | Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. |
| `FulfillmentInboundV0_getShipmentItemsByShipmentId` | read | Returns a list of items in a specified inbound shipment. |
| `FulfillmentInboundV0_getLabels` | read | Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center. |
| `FulfillmentOutbound_deliveryOffers` | write | Returns delivery options that include an estimated delivery date and offer expiration, based on criteria that you specify. |
| `FulfillmentOutbound_getFeatures` | read | Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature. |
| `FulfillmentOutbound_getFeatureInventory` | read | Returns a list of inventory items that are eligible for the fulfillment feature you specify. |
| `FulfillmentOutbound_getFeatureSKU` | read | Returns the number of items with the sellerSku you specify that can have orders fulfilled using the specified feature. |
| `FulfillmentOutbound_listAllFulfillmentOrders` | read | Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the nextToken parameter. |
| `FulfillmentOutbound_createFulfillmentOrder` | write | Requests that Amazon ship items from the seller's inventory in Amazon's fulfillment network to a destination address. |
| `FulfillmentOutbound_getFulfillmentPreview` | read | Returns a list of fulfillment order previews based on shipping criteria that you specify. |
| `FulfillmentOutbound_getFulfillmentOrder` | read | Returns the fulfillment order indicated by the specified order identifier. |
| `FulfillmentOutbound_updateFulfillmentOrder` | write | Updates and/or requests shipment for a fulfillment order with an order hold on it. |
| `FulfillmentOutbound_cancelFulfillmentOrder` | write | Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier. |
| `FulfillmentOutbound_createFulfillmentReturn` | write | Creates a fulfillment return. |
| `FulfillmentOutbound_submitFulfillmentOrderStatusUpdate` | write | Requests that Amazon update the status of an order in the sandbox testing environment. |
| `FulfillmentOutbound_listReturnReasonCodes` | read | Returns a list of return reason codes for a seller SKU in a given marketplace. |
| `FulfillmentOutbound_getPackageTrackingDetails` | read | Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order. |
| `Invoices_getInvoicesAttributes` | read | Returns marketplace-dependent schemas and their respective set of possible values. |
| `Invoices_getInvoicesDocument` | read | Returns the invoice document's ID and URL. |
| `Invoices_getInvoicesExports` | read | Returns invoice exports details for exports that match the filters that you specify. |
| `Invoices_createInvoicesExport` | write | Creates an invoice export request. |
| `Invoices_getInvoicesExport` | read | Returns invoice export details (including the exportDocumentId, if available) for the export that you specify. |
| `Invoices_getGovernmentInvoiceStatus` | read | Returns the status of an invoice generation request. |
| `Invoices_createGovernmentInvoice` | write | Submits an asynchronous government invoice creation request. |
| `Invoices_getGovernmentInvoiceDocument` | read | Returns an invoiceDocument object containing an invoiceDocumentUrl . |
| `Invoices_getInvoices` | read | Returns invoice details for the invoices that match the filters that you specify. |
| `Invoices_getInvoice` | read | Returns invoice data for the specified invoice. |
| `ListingsItems_searchListingsItems` | read | Search for and return a list of selling partner listings items and their respective details. |
| `ListingsItems_deleteListingsItem` | write | Delete a listings item for a selling partner. |
| `ListingsItems_getListingsItem` | read | Returns details about a listings item for a selling partner. |
| `ListingsItems_patchListingsItem` | write | Partially update (patch) a listings item for a selling partner. |
| `ListingsItems_putListingsItem` | write | Creates a new or fully-updates an existing listings item for a selling partner. |
| `ListingsItems20200901_deleteListingsItem` | write | Delete a listings item for a selling partner. |
| `ListingsItems20200901_patchListingsItem` | write | Partially update (patch) a listings item for a selling partner. |
| `ListingsItems20200901_putListingsItem` | write | Creates a new or fully-updates an existing listings item for a selling partner. |
| `ListingsRestrictions_getListingsRestrictions` | read | Returns listing restrictions for an item in the Amazon Catalog. |
| `MerchantFulfillment_getAdditionalSellerInputs` | read | Gets a list of additional seller inputs required for a ship method. |
| `MerchantFulfillment_getEligibleShipmentServices` | read | Returns a list of shipping service offers that satisfy the specified shipment request details. |
| `MerchantFulfillment_createShipment` | write | Create a shipment with the information provided. |
| `MerchantFulfillment_cancelShipment` | write | Cancel the shipment indicated by the specified shipment identifier. |
| `MerchantFulfillment_getShipment` | read | Returns the shipment information for an existing shipment. |
| `Messaging_getMessagingActionsForOrder` | read | Returns a list of message types that are available for an order that you specify. |
| `Messaging_GetAttributes` | read | Returns a response containing attributes related to an order. |
| `Messaging_CreateAmazonMotors` | write | Sends a message to a buyer to provide details about an Amazon Motors order. |
| `Messaging_confirmCustomizationDetails` | write | Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc. |
| `Messaging_createConfirmDeliveryDetails` | write | Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery. |
| `Messaging_createConfirmOrderDetails` | write | Sends a message to ask a buyer an order-related question prior to shipping their order. |
| `Messaging_createConfirmServiceDetails` | write | Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call. |
| `Messaging_createDigitalAccessKey` | write | Sends a buyer a message to share a digital access key that is required to utilize digital content in their order. |
| `Messaging_sendInvoice` | write | Sends a message providing the buyer an invoice |
| `Messaging_createLegalDisclosure` | write | Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. |
| `Messaging_createUnexpectedProblem` | write | Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order. |
| `Messaging_CreateWarranty` | write | Sends a message to a buyer to provide details about warranty information on a purchase in their order. |
| `Notifications_getDestinations` | read | Returns information about all destinations. |
| `Notifications_createDestination` | write | Creates a destination resource to receive notifications. |
| `Notifications_deleteDestination` | write | Deletes the destination that you specify. |
| `Notifications_getDestination` | read | Returns information about the destination that you specify. |
| `Notifications_getSubscription` | read | Returns information about subscription of the specified notification type and payload version. |
| `Notifications_createSubscription` | write | Creates a subscription for the specified notification type to be delivered to the specified destination. |
| `Notifications_deleteSubscriptionById` | write | Deletes the subscription indicated by the subscription identifier and notification type that you specify. |
| `Notifications_getSubscriptionById` | read | Returns information about a subscription for the specified notification type. |
| `Orders_getOrders` | read | Returns orders that are created or updated during the specified time period. |
| `Orders_getOrder` | read | Returns the order that you specify. |
| `Orders_getOrderAddress` | read | Returns the shipping address for the order that you specify. |
| `Orders_getOrderBuyerInfo` | read | Returns buyer information for the order that you specify. |
| `Orders_getOrderItems` | read | Returns detailed order item information for the order that you specify. |
| `Orders_getOrderItemsBuyerInfo` | read | Returns buyer information for the order items in the order that you specify. |
| `Orders_getOrderRegulatedInfo` | read | Returns regulated information for the order that you specify. |
| `Orders_updateVerificationStatus` | write | Updates (approves or rejects) the verification status of an order containing regulated products. |
| `Orders_updateShipmentStatus` | write | Update the shipment status for an order that you specify. |
| `Orders_confirmShipment` | write | Updates the shipment confirmation status for a specified order. |
| `Ordersv2_searchOrders` | read | Returns orders that are created or updated during the time period that you specify. |
| `Ordersv2_getOrder` | read | Returns the order that you specify. |
| `ProductPricing_getItemOffersBatch` | read | Returns the lowest priced offers for a batch of items based on ASIN. |
| `ProductPricing_getListingOffersBatch` | read | Returns the lowest priced offers for a batch of listings by SKU. |
| `ProductPricing_getCompetitivePricing` | read | Returns competitive pricing information for a seller's offer listings based on seller SKU or ASIN. |
| `ProductPricing_getItemOffers` | read | Returns the lowest priced offers for a single item based on ASIN. |
| `ProductPricing_getListingOffers` | read | Returns the lowest priced offers for a single SKU listing. |
| `ProductPricing_getPricing` | read | Returns pricing information for a seller's offer listings based on seller SKU or ASIN. |
| `ProductPricing20220501_getCompetitiveSummary` | read | Returns the competitive summary response, including featured buying options for the ASIN and marketplaceId combination. |
| `ProductPricing20220501_getFeaturedOfferExpectedPriceBatch` | read | Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. |
| `ProductType_searchDefinitionsProductTypes` | read | Search for and return a list of Amazon product types that have definitions available. |
| `ProductType_getDefinitionsProductType` | read | Retrieve an Amazon product type definition. |
| `Replenishment_listOfferMetrics` | read | Returns aggregated replenishment program metrics for a selling partner's offers. |
| `Replenishment_listOffers` | read | Returns the details of a selling partner's replenishment program offers. |
| `Replenishment_getSellingPartnerMetrics` | read | Returns aggregated replenishment program metrics for a selling partner. |
| `Replenishment20221107_listOfferMetrics` | read | Returns aggregated replenishment program metrics for a selling partner's offers. |
| `Replenishment20221107_listOffers` | read | Returns the details of a selling partner's replenishment program offers. |
| `Replenishment20221107_getSellingPartnerMetrics` | read | Returns aggregated replenishment program metrics for a selling partner. |
| `Reports_getReportDocument` | read | Returns the information required for retrieving a report document's contents. |
| `Reports_getReports` | read | Returns report details for the reports that match the filters that you specify. |
| `Reports_createReport` | write | Creates a report. |
| `Reports_cancelReport` | write | Cancels the report that you specify. |
| `Reports_getReport` | read | Returns report details (including the reportDocumentId, if available) for the report that you specify. |
| `Reports_getReportSchedules` | read | Returns report schedule details that match the filters that you specify. |
| `Reports_createReportSchedule` | write | Creates a report schedule. |
| `Reports_cancelReportSchedule` | write | Cancels the report schedule that you specify. |
| `Reports_getReportSchedule` | read | Returns report schedule details for the report schedule that you specify. |
| `Sales_getOrderMetrics` | read | Returns aggregated order metrics for given interval, broken down by granularity, for given buyer type. |
| `Sellers_getAccount` | read | Returns information about a seller account and its marketplaces. |
| `Sellers_getMarketplaceParticipations` | read | Returns a list of marketplaces where the seller can list items and information about the seller's participation in those marketplaces. |
| `SellerWallet_listAccounts` | read | Get Seller Wallet accounts for a seller. |
| `SellerWallet_getAccount` | read | Retrieve a Seller Wallet bank account by Amazon account identifier. |
| `SellerWallet_listAccountBalances` | read | Retrieve the balance in a given Seller Wallet bank account. |
| `SellerWallet_listAccountTransactions` | read | Retrieve a list of transactions for a given Seller Wallet bank account. |
| `SellerWallet_createTransaction` | write | Create a transaction request from a Seller Wallet account to another customer-provided account. |
| `SellerWallet_getTransaction` | read | Find a transaction by the Amazon transaction identifier. |
| `SellerWallet_getTransferPreview` | read | Retrieve a list of potential fees on a transaction. |
| `SellerWallet_listTransferSchedules` | read | Retrieve transfer schedules of a Seller Wallet bank account. |
| `SellerWallet_createTransferSchedule` | write | Create a transfer schedule request from a Seller Wallet account to another customer-provided account. |
| `SellerWallet_updateTransferSchedule` | write | Update transfer schedule information. |
| `SellerWallet_deleteScheduleTransaction` | write | Delete a transaction request that is scheduled from Amazon Seller Wallet account to another customer-provided account. |
| `SellerWallet_getTransferSchedule` | read | Find a particular Amazon Seller Wallet account transfer schedule. |
| `Services_getAppointmentSlots` | read | Gets appointment slots as per the service context specified. |
| `Services_createServiceDocumentUploadDestination` | write | Creates an upload destination. |
| `Services_createReservation` | write | Create a reservation. |
| `Services_cancelReservation` | write | Cancel a reservation. |
| `Services_updateReservation` | write | Update a reservation. |
| `Services_getServiceJobs` | read | Gets service job details for the specified filter query. |
| `Services_getServiceJobByServiceJobId` | read | Gets details of service job indicated by the provided serviceJobID. |
| `Services_getAppointmmentSlotsByJobId` | read | Gets appointment slots for the service associated with the service job id specified. |
| `Services_addAppointmentForServiceJobByServiceJobId` | write | Adds an appointment to the service job indicated by the service job identifier specified. |
| `Services_rescheduleAppointmentForServiceJobByServiceJobId` | write | Reschedules an appointment for the service job indicated by the service job identifier specified. |
| `Services_setAppointmentFulfillmentData` | write | Updates the appointment fulfillment data related to a given jobID and appointmentID. |
| `Services_assignAppointmentResources` | write | Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment. |
| `Services_cancelServiceJobByServiceJobId` | write | Cancels the service job indicated by the service job identifier specified. |
| `Services_completeServiceJobByServiceJobId` | write | Completes the service job indicated by the service job identifier specified. |
| `Services_getFixedSlotCapacity` | read | Provides capacity in fixed-size slots. |
| `Services_getRangeSlotCapacity` | read | Provides capacity slots in a format similar to availability records. |
| `Services_updateSchedule` | write | Update the schedule of the given resource. |
| `ShipmentInvoicing_getShipmentDetails` | read | Returns the shipment details required to issue an invoice for the specified shipment. |
| `ShipmentInvoicing_submitInvoice` | write | Submits a shipment invoice document for a given shipment. |
| `ShipmentInvoicing_getInvoiceStatus` | read | Returns the invoice status for the shipment you specify. |
| `Shipping_getAccessPoints` | read | Returns a list of access points in proximity of input postal code. |
| `Shipping_getCarrierAccountFormInputs` | read | This API will return a list of input schema required to register a shipper account with the carrier. |
| `Shipping_getCarrierAccounts` | read | This API will return Get all carrier accounts for a merchant. |
| `Shipping_linkCarrierAccount` | write | This API associates/links the specified carrier account with the merchant. Two API operations share this name; the server exposes one tool. |
| `Shipping_unlinkCarrierAccount` | write | This API Unlink the specified carrier account with the merchant. |
| `Shipping_createClaim` | write | This API will be used to create claim for single eligible shipment. |
| `Shipping_generateCollectionForm` | write | This API Call to generate the collection form. |
| `Shipping_getCollectionFormHistory` | read | This API Call to get the history of the previously generated collection forms. |
| `Shipping_getCollectionForm` | read | This API reprint a collection form. |
| `Shipping_submitNdrFeedback` | write | This API submits the NDR (Non-delivery Report) Feedback for any eligible shipment. |
| `Shipping_oneClickShipment` | write | Purchases a shipping service identifier and returns purchase-related details and documents. |
| `Shipping_purchaseShipment` | write | Purchases a shipping service and returns purchase related details and documents. |
| `Shipping_getAdditionalInputs` | read | Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. |
| `Shipping_directPurchaseShipment` | write | Purchases the shipping service for a shipment using the best fit service offering. |
| `Shipping_getRates` | read | Returns the available shipping service offerings. |
| `Shipping_cancelShipment` | write | Cancels a purchased shipment. |
| `Shipping_getShipmentDocuments` | read | Returns the shipping documents associated with a package in a shipment. |
| `Shipping_getTracking` | read | Returns tracking information for a purchased shipment. |
| `Shipping_getUnmanifestedShipments` | read | This API Get all unmanifested carriers with shipment locations. |
| `ShippingLegacy_getAccount` | read | Verify if the current account is valid. |
| `ShippingLegacy_purchaseShipment` | write | Purchase shipping labels. |
| `ShippingLegacy_getRates` | read | Get service rates. |
| `ShippingLegacy_createShipment` | write | Create a new shipment. |
| `ShippingLegacy_getShipment` | read | Return the entire shipment object for the shipmentId. |
| `ShippingLegacy_cancelShipment` | write | Cancel a shipment by the given shipmentId. |
| `ShippingLegacy_retrieveShippingLabel` | write | Retrieve shipping label based on the shipment id and tracking id. |
| `ShippingLegacy_purchaseLabels` | write | Purchase shipping labels based on a given rate. |
| `ShippingLegacy_getTrackingInformation` | read | Return the tracking information of a shipment. |
| `Solicitations_getSolicitationActionsForOrder` | read | Returns a list of solicitation types that are available for an order that you specify. |
| `Solicitations_createProductReviewAndSellerFeedbackSolicitation` | write | Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. |
| `SupplySources_getSupplySources` | read | The path to retrieve paginated supply sources. |
| `SupplySources_createSupplySource` | write | Create a new supply source. |
| `SupplySources_archiveSupplySource` | write | Archive a supply source, making it inactive. |
| `SupplySources_getSupplySource` | read | Retrieve a supply source. |
| `SupplySources_updateSupplySource` | write | Update the configuration and capabilities of a supply source. |
| `SupplySources_updateSupplySourceStatus` | write | Update the status of a supply source. |
| `Tokens_createRestrictedDataToken` | write | Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. |
| `Transfers_getPaymentMethods` | read | Returns the list of payment methods for the seller, which can be filtered by method type. |
| `Transfers_initiatePayout` | write | Initiates an on-demand payout to the seller's default deposit method in Seller Central for the given marketplaceId and accountType, if eligible. |
| `Uploads_createUploadDestinationForResource` | write | Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file. |
| `Vehicles_getVehicles` | read | Get the latest collection of vehicles |

</details>

## Set up your client
- [Quick Start: Activepieces MCP](https://www.kuudo.com/docs/quick-start/activepieces/)
- [Quick Start: Google Antigravity](https://www.kuudo.com/docs/quick-start/antigravity/)
- [Quick Start: ChatGPT Skills](https://www.kuudo.com/docs/quick-start/chatgpt-skills/)
- [Quick Start: ChatGPT](https://www.kuudo.com/docs/quick-start/chatgpt/)
- [Quick Start: Claude](https://www.kuudo.com/docs/quick-start/claude-ai/)
- [Quick Start: Claude Skills](https://www.kuudo.com/docs/quick-start/claude-app-skills/)
- [Quick Start: Claude Code MCP](https://www.kuudo.com/docs/quick-start/claude-code-mcp/)
- [Quick Start: Claude Cowork for Amazon Workflows](https://www.kuudo.com/docs/quick-start/claude-cowork-amazon/)
- [Quick Start: Claude Code Skills](https://www.kuudo.com/docs/quick-start/claude-skills/)
- [Quick Start: Codex Skills](https://www.kuudo.com/docs/quick-start/codex-skills/)
- [Quick Start: Codex](https://www.kuudo.com/docs/quick-start/codex/)
- [Quick Start: Hermes MCP](https://www.kuudo.com/docs/quick-start/hermes/)
- [Quick Start: Lovable](https://www.kuudo.com/docs/quick-start/lovable/)
- [Quick Start: n8n MCP](https://www.kuudo.com/docs/quick-start/n8n/)
- [Quick Start: NanoClaw MCP](https://www.kuudo.com/docs/quick-start/nanoclaw/)
- [Quick Start: OpenAI API](https://www.kuudo.com/docs/quick-start/openai-api/)
- [Quick Start: OpenClaw MCP](https://www.kuudo.com/docs/quick-start/openclaw/)
- [Quick Start: Perplexity MCP](https://www.kuudo.com/docs/quick-start/perplexity/)

## Playbooks

Operator guides grounded in Amazon's own documentation, each with the artifact the agent produces:
- [Auditing FBA Reimbursements: What Amazon Owes You](https://www.kuudo.com/guides/seller-fba-reimbursement-audit/)
- [Diagnose a Suppressed Listing: Stranded to Buyable](https://www.kuudo.com/guides/seller-listing-suppression-diagnosis/)
- [Recover Buy Box Eligibility: Causes and Fixes](https://www.kuudo.com/guides/seller-buy-box-eligibility-recovery/)
- [FBA Inventory Health: The Post-2024 Fee Playbook](https://www.kuudo.com/guides/seller-fba-inventory-health-post-2024/)
- [Brand Registry: Fix 'Trademark Already Enrolled'](https://www.kuudo.com/guides/seller-brand-registry-trademark-conflict/)
- [Seeded Image Upgrades: Regenerating Listing Visuals From Your Current Photos, With Approval Gates](https://www.kuudo.com/guides/seller-listing-image-regeneration-seeded/)
- [Amazon FBM Orders Reports: What to Request and Why](https://www.kuudo.com/guides/seller-fbm-orders-reports/)
- [End-to-End Listing Optimization: From Live-Data Audit to a Previewed, Confirmed Patch](https://www.kuudo.com/guides/seller-listing-agentic-audit-to-patch/)

## How it compares
- [Kuudo vs agentcentral for Amazon MCP](https://www.kuudo.com/compare/kuudo-vs-agentcentral/)
- [Kuudo vs Pixii for Amazon sellers](https://www.kuudo.com/compare/kuudo-vs-pixii/)
- [Amazon PPC software compared, tool by tool](https://www.kuudo.com/compare/amazon-ppc-software/)

## Reads, writes, approvals

Read tools are safe to call freely. Write tools are guarded and can require approval before anything changes on Amazon. The full read-versus-write split is documented at https://www.kuudo.com/docs/mcp-reference/amazon-sp-tools/.

## Kuudo

- Website: https://www.kuudo.com/
- Docs: https://www.kuudo.com/docs/
- Guides: https://www.kuudo.com/guides/
- Community, bugs, and questions: https://github.com/KuudoAI/community
- Roadmap: https://github.com/orgs/KuudoAI/projects
- Machine-readable: https://www.kuudo.com/llms.txt · https://www.kuudo.com/pricing.md

Generated from KuudoAI/marketing. Do not edit by hand; changes are overwritten on the next sync.
