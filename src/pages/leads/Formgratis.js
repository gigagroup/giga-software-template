import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import fbadspemula from "../../images/fbadspemula.png";
import ReactPixel from "react-facebook-pixel";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../../components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144 `}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
  min-height: 66rem;
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-3xl lg:text-3xl xl:text-5xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Text = styled.h1`
  ${tw`text-white text-lg text-center`}
`;

export default () => {
  // useEffect(() => {
  //   ReactPixel.track("Purchase", { currency: "IDR", value: 450000.0 });
  // });

  useEffect(() => {
    const advancedMatching = { em: "muhamadaziz047@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
      autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
      debug: false, // enable logs
    };
    ReactPixel.init("845126106051612", advancedMatching, options);
    ReactPixel.track("ViewContent");
  }, []);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/tentang">Tentang</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/harga">Harga</NavLink>
      <NavLink href="/kontak">Kontak Kami</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/login">Login</NavLink>
      <PrimaryLink href="/daftar">Daftar</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Gratis
            <br />
            Video Review Gimana Hanya Dengan 3 Langkah
            <br />
            Anda Bisa Dapet uang Dari Facebook Ads
          </Heading>
          <img
            // tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
            src={fbadspemula}
            alt="Design fbadspemula"
          />
          <Text>
            VIDEO HD Durasi 7 Menit
            <br />
            Pemula Pun Bisa Mempraktekkannya <br />
            Lebih 100 orang sudah memilikinya{" "}
          </Text>

          <form
            action="https://app.getresponse.com/add_subscriber.html"
            accept-charset="utf-8"
            method="post"
          >
            {/*   Nama   */}
            name: <input type="text" name="name" />
            <br />
            {/*   Bidang email (wajib diisi)   */}
            email: <input type="text" name="email" />
            <br />
            {/*   Daftar dipilih   */}
            {/*   Dapatkan token di: https://app.getresponse.com/campaign_list.html   */}
            <input type="hidden" name="campaign_token" value="q7WO1" />
            {/*   Tambahkan pelanggan urutan tindak lanjut sesuai hari yang telah ditentukan (opsional)   */}
            <input type="hidden" name="start_day" value="0" />
            {/*   Tombol pelanggan   */}
            <input type="submit" value="Download" />
          </form>
        </Content>
      </HeroContainer>
    </Container>
  );
};
