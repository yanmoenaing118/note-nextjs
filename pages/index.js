import Zoom from "react-reveal/Zoom";

import Anchor from "../src/components/Anchor/Anchor";
import Layout from "../src/components/Layout/Layout";

const index = () => (
  <Layout>
    <div className="home">
      <Zoom>
        <Anchor href="/notes">
          <p>See Notes &rarr;</p>
        </Anchor>
      </Zoom>
    </div>
  </Layout>
);

export default index;
