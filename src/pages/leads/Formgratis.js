import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ReactPixel from "react-facebook-pixel";
// import EmailIllustrationSrc from "images/email-illustration.svg";
import fbadspemula from "../../images/fbadspemula.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  heading = (
    <>
      <span tw="text-primary-500"> GRATIS!</span> Video Review internet
      marketing Facebook Ads dan
      <wbr /> 1 Landing page.
    </>
  ),
  description = "Lebih dari 100 orang sudah memilikinya.",
  submitButtonText = "Ya Download Video dan template sekarang",
  formAction = "https://gigasoftware.vercel.app/konfirmasigratis",
  formMethod = "post",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  useEffect(() => {
    const advancedMatching = { em: "muhamadaziz047@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
      autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
      debug: false, // enable logs
    };
    ReactPixel.init("845126106051612", advancedMatching, options);
    ReactPixel.track("ViewContent");
  }, []);
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={fbadspemula} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form
              //   action={formAction}
              //   method={formMethod}
              //   accept-charset="utf-8"
              action="https://app.getresponse.com/add_subscriber.html"
              accept-charset="utf-8"
              method="post"
            >
              <Input
                type="email"
                name="email"
                placeholder="Alamat Email Anda"
              />
              <Input type="text" name="nama" placeholder="Nama Lengkap Anda" />
              {/*   Daftar dipilih   */}
              {/*   Dapatkan token di: https://app.getresponse.com/campaign_list.html   */}
              <Input type="hidden" name="campaign_token" value="q7WO1" />
              {/*   Tambahkan pelanggan urutan tindak lanjut sesuai hari yang telah ditentukan (opsional)   */}
              <Input type="hidden" name="start_day" value="0" />
              {/*   Tombol pelanggan   */}
              <SubmitButton type="submit" value="Download">
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
