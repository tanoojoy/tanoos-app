import { Card, Page, Layout, TextContainer, Image, Stack, Link, Heading} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { trophyImage } from "../assets";
import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Shopify-Arcadier App" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉</Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
// import {
//   Card,
//   EmptyState,
//   Layout,
//   Page,
//   SkeletonBodyText,
// } from "@shopify/polaris";

// export default function HomePage() {
//   /*
//     Add an App Bridge useNavigate hook to set up the navigate function.
//     This function modifies the top-level browser URL so that you can
//     navigate within the embedded app and keep the browser in sync on reload.
//   */
//   const navigate = useNavigate();

//   /*
//     These are mock values. Setting these values lets you preview the loading markup and the empty state.
//   */
//   const isLoading = false;
//   const isRefetching = false;
//   const QRCodes = [];

//   /* loadingMarkup uses the loading component from AppBridge and components from Polaris  */
//   const loadingMarkup = isLoading ? (
//     <Card sectioned>
//       <Loading />
//       <SkeletonBodyText />
//     </Card>
//   ) : null;

//   /* Use Polaris Card and EmptyState components to define the contents of the empty state */
//   const emptyStateMarkup =
//     !isLoading && !QRCodes?.length ? (
//       <Card sectioned>
//         <EmptyState
//           heading="Create unique QR codes for your product"
//           /* This button will take the user to a Create a QR code page */
//           action={{
//             content: "Create QR code",
//             onAction: () => navigate("/qrcodes/new"),
//           }}
//           image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
//         >
//           <p>
//             Allow customers to scan codes and buy products using their phones.
//           </p>
//         </EmptyState>
//       </Card>
//     ) : null;

//   /*
//     Use Polaris Page and TitleBar components to create the page layout,
//     and include the empty state contents set above.
//   */
//   return (
//     <Page>
//       <TitleBar
//         title="QR codes"
//         primaryAction={{
//           content: "Create QR code",
//           onAction: () => navigate("/qrcodes/new"),
//         }}
//       />
//       <Layout>
//         <Layout.Section>
//           {loadingMarkup}
//           {emptyStateMarkup}
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }

