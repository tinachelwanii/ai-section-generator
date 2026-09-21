const heroLayout = {
  id: "hero-section",
  type: "section",
  props: {
    className: "hero-section",
  },
  children: [
    {
      id: "hero-heading",
      type: "heading",
      props: {
        text: "Build Something Amazing",
        level: 1,
      },
    },
    {
      id: "hero-description",
      type: "paragraph",
      props: {
        text: "Create beautiful websites faster with our AI-powered section generator.",
      },
    },
    {
      id: "hero-button",
      type: "button",
      props: {
        text: "Get Started",
      },
    },
  ],
};

const pricingLayout = {
  id: "pricing-section",
  type: "section",
  props: {
    className: "pricing-section",
  },
  children: [
    {
      id: "pricing-heading",
      type: "heading",
      props: {
        text: "Choose Your Plan",
        level: 1,
      },
    },
    {
      id: "pricing-description",
      type: "paragraph",
      props: {
        text: "Simple and transparent pricing for everyone.",
      },
    },
    {
      id: "pricing-container",
      type: "container",
      props: {
        className: "pricing-container",
      },
      children: [
        {
          id: "basic-card",
          type: "card",
          props: {
            className: "pricing-card",
          },
          children: [
            {
              id: "basic-title",
              type: "heading",
              props: {
                text: "Basic",
                level: 2,
              },
            },
            {
              id: "basic-price",
              type: "paragraph",
              props: {
                text: "$10 / month",
              },
            },
            {
              id: "basic-description",
              type: "paragraph",
              props: {
                text: "Perfect for individuals getting started.",
              },
            },
            {
              id: "basic-button",
              type: "button",
              props: {
                text: "Get Started",
              },
            },
          ],
        },
        {
          id: "pro-card",
          type: "card",
          props: {
            className: "pricing-card featured",
          },
          children: [
            {
              id: "pro-title",
              type: "heading",
              props: {
                text: "Pro",
                level: 2,
              },
            },
            {
              id: "pro-price",
              type: "paragraph",
              props: {
                text: "$25 / month",
              },
            },
            {
              id: "pro-description",
              type: "paragraph",
              props: {
                text: "Great for growing teams and projects.",
              },
            },
            {
              id: "pro-button",
              type: "button",
              props: {
                text: "Choose Pro",
              },
            },
          ],
        },
        {
          id: "premium-card",
          type: "card",
          props: {
            className: "pricing-card",
          },
          children: [
            {
              id: "premium-title",
              type: "heading",
              props: {
                text: "Premium",
                level: 2,
              },
            },
            {
              id: "premium-price",
              type: "paragraph",
              props: {
                text: "$50 / month",
              },
            },
            {
              id: "premium-description",
              type: "paragraph",
              props: {
                text: "For businesses that need advanced features.",
              },
            },
            {
              id: "premium-button",
              type: "button",
              props: {
                text: "Go Premium",
              },
            },
          ],
        },
      ],
    },
  ],
};

module.exports = {
  heroLayout,
  pricingLayout,
};