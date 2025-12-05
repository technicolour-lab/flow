export const initialFlows = [
    {
        "id": "ecommerce-checkout-flow",
        "name": "E-commerce Checkout Flow",
        "nodes": [
            {
                "id": "home-page",
                "type": "website",
                "position": { "x": 0, "y": 200 },
                "data": { "label": "Home Page", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "featured-products",
                "type": "products",
                "position": { "x": 150, "y": 50 },
                "data": { "label": "Featured", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "categories",
                "type": "table",
                "position": { "x": 150, "y": 200 },
                "data": { "label": "Categories", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "search-bar",
                "type": "search",
                "position": { "x": 150, "y": 350 },
                "data": { "label": "Search", "color": "gray" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "product-catalog",
                "type": "products",
                "position": { "x": 320, "y": 200 },
                "data": { "label": "Product Catalog", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "filter-sort",
                "type": "roundrectangle",
                "position": { "x": 320, "y": 350 },
                "data": { "label": "Filter & Sort", "color": "gray" },
                "width": 100,
                "height": 30
            },
            {
                "id": "product-detail",
                "type": "product",
                "position": { "x": 490, "y": 200 },
                "data": { "label": "Product Detail", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "reviews",
                "type": "comments",
                "position": { "x": 490, "y": 50 },
                "data": { "label": "Reviews", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "related-products",
                "type": "products",
                "position": { "x": 490, "y": 350 },
                "data": { "label": "Related Items", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "add-to-cart",
                "type": "roundrectangle",
                "position": { "x": 660, "y": 225 },
                "data": { "label": "Add to Cart", "color": "green" },
                "width": 100,
                "height": 30
            },
            {
                "id": "wishlist",
                "type": "roundrectangle",
                "position": { "x": 660, "y": 125 },
                "data": { "label": "Add to Wishlist", "color": "red" },
                "width": 110,
                "height": 30
            },
            {
                "id": "shopping-cart",
                "type": "files",
                "position": { "x": 830, "y": 200 },
                "data": { "label": "Shopping Cart", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "promo-code",
                "type": "roundrectangle",
                "position": { "x": 830, "y": 350 },
                "data": { "label": "Apply Promo", "color": "green" },
                "width": 100,
                "height": 30
            },
            {
                "id": "user-login",
                "type": "user",
                "position": { "x": 1000, "y": 50 },
                "data": { "label": "Login", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "user-register",
                "type": "form",
                "position": { "x": 1170, "y": 50 },
                "data": { "label": "Register", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "guest-checkout",
                "type": "roundrectangle",
                "position": { "x": 1000, "y": 350 },
                "data": { "label": "Guest Checkout", "color": "gray" },
                "width": 110,
                "height": 30
            },
            {
                "id": "checkout-page",
                "type": "form",
                "position": { "x": 1000, "y": 200 },
                "data": { "label": "Checkout", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "shipping-address",
                "type": "form",
                "position": { "x": 1170, "y": 200 },
                "data": { "label": "Shipping", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "payment-method",
                "type": "payment",
                "position": { "x": 1340, "y": 200 },
                "data": { "label": "Payment", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "order-review",
                "type": "table",
                "position": { "x": 1510, "y": 200 },
                "data": { "label": "Review Order", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "order-confirmation",
                "type": "dashboard",
                "position": { "x": 1680, "y": 200 },
                "data": { "label": "Confirmation", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "email-receipt",
                "type": "contact",
                "position": { "x": 1680, "y": 50 },
                "data": { "label": "Email Receipt", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "track-order",
                "type": "map",
                "position": { "x": 1680, "y": 350 },
                "data": { "label": "Track Order", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            }
        ],
        "edges": [
            {
                "source": "home-page",
                "sourceHandle": "a",
                "target": "featured-products",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-home-featured",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "home-page",
                "sourceHandle": "d",
                "target": "categories",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-home-categories",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "home-page",
                "sourceHandle": "c",
                "target": "search-bar",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-home-search",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "featured-products",
                "sourceHandle": "d",
                "target": "product-detail",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-featured-detail",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "categories",
                "sourceHandle": "d",
                "target": "product-catalog",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-categories-catalog",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "search-bar",
                "sourceHandle": "d",
                "target": "product-catalog",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-search-catalog",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "filter-sort",
                "sourceHandle": "a",
                "target": "product-catalog",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-filter-catalog",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "product-catalog",
                "sourceHandle": "d",
                "target": "product-detail",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-catalog-detail",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "product-detail",
                "sourceHandle": "a",
                "target": "reviews",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-detail-reviews",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "product-detail",
                "sourceHandle": "c",
                "target": "related-products",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-detail-related",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "related-products",
                "sourceHandle": "a",
                "target": "product-detail",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-related-detail",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "product-detail",
                "sourceHandle": "d",
                "target": "add-to-cart",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-detail-addcart",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "reviews",
                "sourceHandle": "d",
                "target": "wishlist",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "red", "strokeWidth": 1 },
                "id": "edge-reviews-wishlist",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#ef4444" }
            },
            {
                "source": "add-to-cart",
                "sourceHandle": "d",
                "target": "shopping-cart",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-addcart-cart",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "shopping-cart",
                "sourceHandle": "c",
                "target": "promo-code",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-cart-promo",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "shopping-cart",
                "sourceHandle": "a",
                "target": "user-login",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-cart-login",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "shopping-cart",
                "sourceHandle": "d",
                "target": "checkout-page",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-cart-checkout",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "user-login",
                "sourceHandle": "d",
                "target": "user-register",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-login-register",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "user-login",
                "sourceHandle": "c",
                "target": "checkout-page",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-login-checkout",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "guest-checkout",
                "sourceHandle": "a",
                "target": "checkout-page",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-guest-checkout",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "checkout-page",
                "sourceHandle": "d",
                "target": "shipping-address",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-checkout-shipping",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "shipping-address",
                "sourceHandle": "d",
                "target": "payment-method",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-shipping-payment",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "payment-method",
                "sourceHandle": "d",
                "target": "order-review",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-payment-review",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "order-review",
                "sourceHandle": "d",
                "target": "order-confirmation",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-review-confirm",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "order-confirmation",
                "sourceHandle": "a",
                "target": "email-receipt",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-confirm-email",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "order-confirmation",
                "sourceHandle": "c",
                "target": "track-order",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-confirm-track",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            }
        ],
        "group": null,
        "updatedAt": Date.now()
    },
    {
        "id": "user-onboarding-flow",
        "name": "User Onboarding Flow",
        "nodes": [
            {
                "id": "marketing-landing",
                "type": "website",
                "position": { "x": 0, "y": 150 },
                "data": { "label": "Landing Page", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "pricing-page",
                "type": "table",
                "position": { "x": 0, "y": 0 },
                "data": { "label": "Pricing", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "features-page",
                "type": "dashboard",
                "position": { "x": 0, "y": 300 },
                "data": { "label": "Features", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "sign-up-form",
                "type": "form",
                "position": { "x": 180, "y": 150 },
                "data": { "label": "Sign Up", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "social-login",
                "type": "roundrectangle",
                "position": { "x": 180, "y": 300 },
                "data": { "label": "Social Login", "color": "sky" },
                "width": 100,
                "height": 30
            },
            {
                "id": "email-verification",
                "type": "contact",
                "position": { "x": 360, "y": 150 },
                "data": { "label": "Verify Email", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "resend-email",
                "type": "roundrectangle",
                "position": { "x": 360, "y": 300 },
                "data": { "label": "Resend Email", "color": "gray" },
                "width": 100,
                "height": 30
            },
            {
                "id": "profile-setup",
                "type": "user",
                "position": { "x": 540, "y": 150 },
                "data": { "label": "Profile Setup", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "avatar-upload",
                "type": "files",
                "position": { "x": 540, "y": 0 },
                "data": { "label": "Upload Avatar", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "preferences",
                "type": "form",
                "position": { "x": 540, "y": 300 },
                "data": { "label": "Preferences", "color": "gray" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "plan-selection",
                "type": "table",
                "position": { "x": 720, "y": 150 },
                "data": { "label": "Select Plan", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "free-trial",
                "type": "roundrectangle",
                "position": { "x": 720, "y": 0 },
                "data": { "label": "Free Trial", "color": "sky" },
                "width": 80,
                "height": 30
            },
            {
                "id": "payment-setup",
                "type": "payment",
                "position": { "x": 720, "y": 300 },
                "data": { "label": "Add Payment", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "team-invite",
                "type": "comments",
                "position": { "x": 900, "y": 0 },
                "data": { "label": "Invite Team", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "tutorial-start",
                "type": "dashboard",
                "position": { "x": 900, "y": 150 },
                "data": { "label": "Tutorial", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "skip-tutorial",
                "type": "roundrectangle",
                "position": { "x": 900, "y": 300 },
                "data": { "label": "Skip Tutorial", "color": "gray" },
                "width": 100,
                "height": 30
            },
            {
                "id": "feature-tour-1",
                "type": "roundrectangle",
                "position": { "x": 1080, "y": 75 },
                "data": { "label": "Step 1: Basics", "color": "purple" },
                "width": 100,
                "height": 30
            },
            {
                "id": "feature-tour-2",
                "type": "roundrectangle",
                "position": { "x": 1080, "y": 150 },
                "data": { "label": "Step 2: Tools", "color": "purple" },
                "width": 100,
                "height": 30
            },
            {
                "id": "feature-tour-3",
                "type": "roundrectangle",
                "position": { "x": 1080, "y": 225 },
                "data": { "label": "Step 3: Tips", "color": "purple" },
                "width": 100,
                "height": 30
            },
            {
                "id": "main-dashboard",
                "type": "dashboard",
                "position": { "x": 1260, "y": 150 },
                "data": { "label": "Dashboard", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "help-center",
                "type": "search",
                "position": { "x": 1260, "y": 0 },
                "data": { "label": "Help Center", "color": "gray" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "first-project",
                "type": "portfolio",
                "position": { "x": 1260, "y": 300 },
                "data": { "label": "First Project", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            }
        ],
        "edges": [
            {
                "source": "marketing-landing",
                "sourceHandle": "a",
                "target": "pricing-page",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-landing-pricing",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "marketing-landing",
                "sourceHandle": "c",
                "target": "features-page",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-landing-features",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "marketing-landing",
                "sourceHandle": "d",
                "target": "sign-up-form",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-landing-signup",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "pricing-page",
                "sourceHandle": "d",
                "target": "sign-up-form",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-pricing-signup",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "sign-up-form",
                "sourceHandle": "c",
                "target": "social-login",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-signup-social",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "sign-up-form",
                "sourceHandle": "d",
                "target": "email-verification",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-signup-verify",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "social-login",
                "sourceHandle": "d",
                "target": "email-verification",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-social-verify",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "email-verification",
                "sourceHandle": "c",
                "target": "resend-email",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-verify-resend",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "email-verification",
                "sourceHandle": "d",
                "target": "profile-setup",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-verify-profile",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "profile-setup",
                "sourceHandle": "a",
                "target": "avatar-upload",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-profile-avatar",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "profile-setup",
                "sourceHandle": "c",
                "target": "preferences",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-profile-prefs",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "profile-setup",
                "sourceHandle": "d",
                "target": "plan-selection",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-profile-plan",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "plan-selection",
                "sourceHandle": "a",
                "target": "free-trial",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-plan-trial",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "plan-selection",
                "sourceHandle": "c",
                "target": "payment-setup",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-plan-payment",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "plan-selection",
                "sourceHandle": "d",
                "target": "tutorial-start",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-plan-tutorial",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "free-trial",
                "sourceHandle": "d",
                "target": "team-invite",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-trial-team",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "team-invite",
                "sourceHandle": "c",
                "target": "tutorial-start",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-team-tutorial",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "tutorial-start",
                "sourceHandle": "c",
                "target": "skip-tutorial",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-tutorial-skip",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "tutorial-start",
                "sourceHandle": "d",
                "target": "feature-tour-1",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-tutorial-step1",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "feature-tour-1",
                "sourceHandle": "c",
                "target": "feature-tour-2",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-step1-step2",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "feature-tour-2",
                "sourceHandle": "c",
                "target": "feature-tour-3",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-step2-step3",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "feature-tour-3",
                "sourceHandle": "d",
                "target": "main-dashboard",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-step3-dashboard",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "skip-tutorial",
                "sourceHandle": "d",
                "target": "main-dashboard",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-skip-dashboard",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "main-dashboard",
                "sourceHandle": "a",
                "target": "help-center",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-dashboard-help",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "main-dashboard",
                "sourceHandle": "c",
                "target": "first-project",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-dashboard-project",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            }
        ],
        "group": null,
        "updatedAt": Date.now()
    },
    {
        "id": "saas-dashboard-flow",
        "name": "SaaS Dashboard Flow",
        "nodes": [
            {
                "id": "login-page",
                "type": "user",
                "position": { "x": 0, "y": 200 },
                "data": { "label": "Login", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "forgot-password",
                "type": "roundrectangle",
                "position": { "x": 0, "y": 350 },
                "data": { "label": "Forgot Password", "color": "gray" },
                "width": 120,
                "height": 30
            },
            {
                "id": "two-factor",
                "type": "roundrectangle",
                "position": { "x": 0, "y": 50 },
                "data": { "label": "2FA Verify", "color": "orange" },
                "width": 80,
                "height": 30
            },
            {
                "id": "dashboard-home",
                "type": "dashboard",
                "position": { "x": 220, "y": 200 },
                "data": { "label": "Dashboard", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "notifications",
                "type": "roundrectangle",
                "position": { "x": 220, "y": 50 },
                "data": { "label": "Notifications", "color": "red" },
                "width": 100,
                "height": 30
            },
            {
                "id": "quick-actions",
                "type": "roundrectangle",
                "position": { "x": 220, "y": 350 },
                "data": { "label": "Quick Actions", "color": "green" },
                "width": 100,
                "height": 30
            },
            {
                "id": "analytics-overview",
                "type": "dashboard",
                "position": { "x": 440, "y": -50 },
                "data": { "label": "Analytics", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "reports",
                "type": "table",
                "position": { "x": 660, "y": -50 },
                "data": { "label": "Reports", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "export-data",
                "type": "files",
                "position": { "x": 880, "y": -50 },
                "data": { "label": "Export", "color": "gray" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "projects-list",
                "type": "portfolio",
                "position": { "x": 440, "y": 200 },
                "data": { "label": "Projects", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "create-project",
                "type": "roundrectangle",
                "position": { "x": 440, "y": 350 },
                "data": { "label": "New Project", "color": "green" },
                "width": 100,
                "height": 30
            },
            {
                "id": "project-detail",
                "type": "product",
                "position": { "x": 660, "y": 200 },
                "data": { "label": "Project Detail", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "task-board",
                "type": "table",
                "position": { "x": 880, "y": 100 },
                "data": { "label": "Task Board", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "task-detail",
                "type": "form",
                "position": { "x": 1100, "y": 100 },
                "data": { "label": "Task Detail", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "comments",
                "type": "comments",
                "position": { "x": 1320, "y": 0 },
                "data": { "label": "Comments", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "attachments",
                "type": "files",
                "position": { "x": 1320, "y": 200 },
                "data": { "label": "Attachments", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "team-members",
                "type": "comments",
                "position": { "x": 880, "y": 300 },
                "data": { "label": "Team", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "invite-member",
                "type": "contact",
                "position": { "x": 1100, "y": 300 },
                "data": { "label": "Invite", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "project-files",
                "type": "files",
                "position": { "x": 880, "y": 450 },
                "data": { "label": "Files", "color": "sky" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "upload-file",
                "type": "roundrectangle",
                "position": { "x": 1100, "y": 475 },
                "data": { "label": "Upload", "color": "sky" },
                "width": 70,
                "height": 30
            },
            {
                "id": "settings-page",
                "type": "form",
                "position": { "x": 440, "y": 500 },
                "data": { "label": "Settings", "color": "gray" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "profile-settings",
                "type": "user",
                "position": { "x": 660, "y": 500 },
                "data": { "label": "Profile", "color": "orange" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "billing-settings",
                "type": "payment",
                "position": { "x": 880, "y": 600 },
                "data": { "label": "Billing", "color": "green" },
                "measured": { "width": 82, "height": 89 }
            },
            {
                "id": "integrations",
                "type": "dashboard",
                "position": { "x": 1100, "y": 600 },
                "data": { "label": "Integrations", "color": "purple" },
                "measured": { "width": 82, "height": 89 }
            }
        ],
        "edges": [
            {
                "source": "login-page",
                "sourceHandle": "a",
                "target": "two-factor",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-login-2fa",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "login-page",
                "sourceHandle": "c",
                "target": "forgot-password",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-login-forgot",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "login-page",
                "sourceHandle": "d",
                "target": "dashboard-home",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-login-dashboard",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "two-factor",
                "sourceHandle": "d",
                "target": "dashboard-home",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-2fa-dashboard",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "dashboard-home",
                "sourceHandle": "a",
                "target": "notifications",
                "targetHandle": "c",
                "type": "custom",
                "animated": true,
                "data": { "color": "red", "strokeWidth": 1 },
                "id": "edge-dashboard-notif",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#ef4444" }
            },
            {
                "source": "dashboard-home",
                "sourceHandle": "c",
                "target": "quick-actions",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-dashboard-quick",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "notifications",
                "sourceHandle": "d",
                "target": "analytics-overview",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-notif-analytics",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "dashboard-home",
                "sourceHandle": "d",
                "target": "projects-list",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-dashboard-projects",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "analytics-overview",
                "sourceHandle": "d",
                "target": "reports",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-analytics-reports",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "reports",
                "sourceHandle": "d",
                "target": "export-data",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-reports-export",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "projects-list",
                "sourceHandle": "c",
                "target": "create-project",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-projects-create",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "projects-list",
                "sourceHandle": "d",
                "target": "project-detail",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-projects-detail",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "project-detail",
                "sourceHandle": "a",
                "target": "task-board",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-detail-tasks",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "project-detail",
                "sourceHandle": "d",
                "target": "team-members",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-detail-team",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "project-detail",
                "sourceHandle": "c",
                "target": "project-files",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-detail-files",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "task-board",
                "sourceHandle": "d",
                "target": "task-detail",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-tasks-detail",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "task-detail",
                "sourceHandle": "a",
                "target": "comments",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-task-comments",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "task-detail",
                "sourceHandle": "d",
                "target": "attachments",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-task-attach",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            },
            {
                "source": "team-members",
                "sourceHandle": "d",
                "target": "invite-member",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-team-invite",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "project-files",
                "sourceHandle": "d",
                "target": "upload-file",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "sky", "strokeWidth": 1 },
                "id": "edge-files-upload",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#38bdf8" }
            },
            {
                "source": "quick-actions",
                "sourceHandle": "d",
                "target": "settings-page",
                "targetHandle": "a",
                "type": "custom",
                "animated": true,
                "data": { "color": "gray", "strokeWidth": 1 },
                "id": "edge-quick-settings",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#6b7280" }
            },
            {
                "source": "settings-page",
                "sourceHandle": "d",
                "target": "profile-settings",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "orange", "strokeWidth": 1 },
                "id": "edge-settings-profile",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#f97316" }
            },
            {
                "source": "profile-settings",
                "sourceHandle": "d",
                "target": "billing-settings",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "green", "strokeWidth": 1 },
                "id": "edge-profile-billing",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#22c55e" }
            },
            {
                "source": "billing-settings",
                "sourceHandle": "d",
                "target": "integrations",
                "targetHandle": "b",
                "type": "custom",
                "animated": true,
                "data": { "color": "purple", "strokeWidth": 1 },
                "id": "edge-billing-integrations",
                "markerEnd": { "type": "arrowclosed", "width": 20, "height": 20, "color": "#a855f7" }
            }
        ],
        "group": null,
        "updatedAt": Date.now()
    }
]
