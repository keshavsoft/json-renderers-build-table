# json-renderers-build-table

Focused table specification builder extracted from the table work in `json-renderers-build`.

The package builds JSON DOM specifications for table sections. Table data remains separate from table and row options, so row actions, row attributes, and custom cell elements can evolve without adding table-specific behavior to the generic renderer package.

Use the exported `renderRequests` JSON catalog to see complete requests for each supported flavor. It includes a basic table, serial numbers, default or custom actions, combined options, and standalone table head/body requests:

```js
import render, { renderRequests } from "json-renderers-build-table";

const request = structuredClone(renderRequests.tableWithSerialAndActions);
request.data = [{ itemName: "0.11-25", baseUnit: "kgs" }];

const table = render(request);
```

The catalog is also available as `render.requests` when importing the default renderer. Clone a catalog entry before changing it so the shared examples remain unchanged.
