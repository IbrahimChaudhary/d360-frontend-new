"use client";
import React from "react";
import ContentSection from "../content-section";
import { ApplePayData } from "@/types/apple-pay/apple-pay";
interface ApplePayProps {
  data: ApplePayData;
}
function ApplePayOverview({ data }: ApplePayProps) {
  return (
    <div className="max-w-[1228px] flex-col justify-center items-center ">
      <div className="xx mt-10">
        <div className="text-[70px]  font-extrabold">{data.Title1}</div>
        <div className="text-[25px]">{data.Description1}</div>
      </div>

      <ContentSection heading={data.Title2}>
        <p>{data.Description2}</p>
        {/* 
        <h3 className="font-semibold mt-4">Security Tips</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Keep your password private and never share it with anyone. Remember,
            our D360 bank representatives will never ask for your user
            credentials.
          </li>
          <li>
            Enable multi-factor authentication (MFA), to add an extra layer of
            security to your accounts.
          </li>
          <li>
            Avoid using personal information such as your name, pet’s name, or
            birthday in your password.
          </li>
          <li>
            Use long and complex passwords that are difficult for others to
            guess but easy for you to remember.
          </li>
          <li>Never reuse the same password across multiple accounts.</li>
          <li>Change your passwords regularly, for example every 90 days.</li>
          <li>
            Create strong passwords that include a mix of upper- and lower-case
            letters, numbers, and special characters like @ #? .
          </li>
          <li>
            Avoid sharing your password through email or online direct messages.
          </li>
          <li>
            Remember, passwords are our first line of defense against
            unauthorized access, and it’s up to us to keep them safe.
          </li>
        </ul> */}
      </ContentSection>

      <ContentSection heading={data.Title3}>
        <p>{data.Description3}</p>
      </ContentSection>
      <ContentSection heading={data.Title4}>
        <p>{data.Description4}</p>
      </ContentSection>

      <ContentSection heading={data.Title5}>
        <p>{data.Description5}</p>
      </ContentSection>
      <ContentSection heading={data.Title6}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description6A}</li>
          <li>{data.Description6B}</li>
          <li>{data.Description6C}</li>
          <li>{data.Description6D}</li>
          <li>{data.Description6E}</li>
          <li>{data.Description6F}</li>
        </ul>
      </ContentSection>

      <ContentSection heading={data.Title7}>
        <h3 className="font-semibold mt-4">{data.Title7A}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description7A}</li>
          <li>{data.Description7B}</li>
        </ul>
        <h3 className="font-semibold mt-4">{data.Title7B}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description7C}</li>
          <li>{data.Description7D}</li>
          <li>{data.Description7E}</li>
          <li>{data.Description7F}</li>
        </ul>
        <h3 className="font-semibold mt-4">{data.Title7C}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description7G}</li>
          <li>{data.Description7H}</li>
          <li>{data.Description7I}</li>
          <li>{data.Description7J}</li>
        </ul>
      </ContentSection>
      <ContentSection heading={data.Title8}>
        <h3 className="font-semibold mt-4">{data.Title8A}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description8A}</li>
          <li>{data.Description8B}</li>
          <li>{data.Description8C}</li>
          <li>{data.Description8D}</li>
          <li>{data.Description8E}</li>
          <li>{data.Description8F}</li>
          <li>{data.Description8G}</li>
          <li>{data.Description8H}</li>
          <li>{data.Description8I}</li>
          <li>{data.Description8J}</li>
          <li>{data.Description8K}</li>
        </ul>
        <h3 className="font-semibold mt-4">{data.Title8B}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description8L}</li>
          <li>{data.Description8M}</li>
          <li>{data.Description8N}</li>
          <li>{data.Description8O}</li>
        </ul>
        <h3 className="font-semibold mt-4">{data.Title8C}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description8P}</li>
          <li>{data.Description8Q}</li>
          <li>{data.Description8R}</li>
        </ul>
        <h3 className="font-semibold mt-4">{data.Title8D}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description8S}</li>
          <li>{data.Description8T}</li>
          <li>{data.Description8U}</li>
          <li>{data.Description8V}</li>
        </ul>
      </ContentSection>
      <ContentSection heading={data.Title9}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.Description9A}</li>
          <li>{data.Description9B}</li>
          <li>{data.Description9C}</li>
          <li>{data.Description9D}</li>
          <li>{data.Description9E}</li>
        </ul>
      </ContentSection>
    </div>
  );
}

export default ApplePayOverview;
