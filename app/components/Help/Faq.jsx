import { AnchorIcon } from "./AnchorIcon";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  return (
    <div>
      <p className="pb-5 text-md font-medium">
        Frequently asked questions (FAQs)
      </p>
      <Accordion
        variant="splitted"
        selectionMode="multiple"
        className="px-0 space-y-2.5"
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What is cryptocurrency?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">
            {`Cryptocurrency is a digital or virtual currency that uses
            cryptography to secure transactions and to control the creation of
            new units. It is decentralized, meaning it is not issued by any
            central authority and operates on a distributed ledger enforced by
            blockchain technology. Cryptocurrencies can be used to buy goods and
            services, but most people invest in them as they would in other
            assets, like stocks or precious metals.`}
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Who regulates cryptocurrency?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`Cryptocurrencies are regulated by various entities, and the regulatory landscape varies by country. In the United States, the regulation of cryptocurrencies involves multiple federal agencies, including the Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC), the Federal Trade Commission (FTC), the Department of the Treasury, the Internal Revenue Service (IRS), the Office of the Comptroller of the Currency (OCC), and the Financial Crimes Enforcement Network (FinCEN). The regulatory approach at the state level in the U.S. varies, with some states seeking to promote the technology by passing favorable regulations, while others have proposed and/or passed laws affecting cryptocurrencies and blockchain technology`}</p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="What is a non-fungible token (NFT)?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`An NFT, or non-fungible token, is a unique cryptographic asset used to create and authenticate ownership of digital assets. The term "non-fungible" means that it's unique and can't be replaced with something else. Unlike cryptocurrencies, which are fungible and can be traded or exchanged for one another, NFTs are one-of-a-kind and cannot be replaced with something else.`}</p>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="Difference b/w crypto and NFT?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`Cryptocurrencies and NFTs are both digital assets that use blockchain technology, but they have significant differences. Cryptocurrencies are fungible tokens that can be traded or exchanged for one another, while NFTs are unique and non-interchangeable tokens that represent ownership of a specific digital asset, such as artwork or music. Cryptocurrencies are primarily used as a form of digital currency, while NFTs are used to authenticate ownership of digital assets. Cryptocurrencies are often traded on exchanges, while NFTs are typically sold in online marketplaces.`}</p>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title="What is NFT digital art?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`NFT digital art refers to digital assets stored on a blockchain that represent various forms of digital content, such as drawings, paintings, music, film, poetry, or books. NFT art allows artists to sell or rent their artwork beyond the physical world. The process of creating NFT digital art typically involves converting traditional or digital artwork into a digital format, listing it on an NFT marketplace, and selecting a blockchain and market for selling, along with setting selling rules. NFTs provide a secure record stamped with a unique identifying code that's stored on a blockchain, allowing for ownership authentication and the ability to buy, sell, or trade digital assets in new ways.`}</p>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 6"
          title="Which popular brands use NFTs?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`Some examples of popular brands that use NFT are Coca cola, Nike, Adidas, Gucci and Mclaren. Besides these many other famous brands use NFTs for marketing as well as selling their digital assets.`}</p>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Accordion 7"
          title="What are benefits of owning NFT?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`NFTs establish authenticity and prove ownership by linking the asset to a single account that is verifiable on the blockchain. This provides confidence in the value of the NFT and prevents fraud or unauthorized copying. NFTs empower digital creators and owners to generate new income from their work. Creators can earn a percentage of each subsequent sale of their NFT, providing a continuous revenue stream as the value of the asset appreciates over time.  NFTs allow for digital ownership, proving ownership and providing a clear record of ownership history. This ownership is easily transferable and can be accessed from anywhere in the world, making it more accessible to a global market`}</p>
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Accordion 8"
          title="What are smart contracts?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`Smart contracts are computer programs or transaction protocols that automatically execute, control, or document events and actions according to the terms of a contract or an agreement. They are intended to reduce the need for trusted intermediaries, arbitration costs, and fraud losses, as well as to minimize malicious and accidental exceptions. Smart contracts are typically associated with blockchain technology, and they are designed to run on decentralized networks, such as Ethereum. These programs are stored on a blockchain and are executed when predetermined conditions are met, without the need for intermediaries. Smart contracts are used to automate the execution of agreements, enabling trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism. They are tamper-proof and provide a secure and transparent way of executing and enforcing the terms of a contract or agreement`}</p>
        </AccordionItem>
        <AccordionItem
          key="9"
          aria-label="Accordion 9"
          title="How NFTs use smart contract?"
          indicator={<AnchorIcon />}
          className="text-md font-medium p-5 outline-none bg-modalGray rounded-xl  border border-gray"
        >
          <p className="text-sm font-normal py-2.5 pb-0">{`Smart contracts are essential for NFTs as they are used for the minting process (creation) and to assign ownership of the token. When a new non-fungible token is minted, the smart contract automatically sets the creator as the owner. NFT smart contracts can transfer the token to new owners when a sale is made. In some cases, NFT marketplaces use a suite of smart contracts for auctioning NFTs. These sites may temporarily hold token ownership until predetermined conditions, such as a specific date or bid price, are met. They can also set specific parameters to cancel the auction and transfer NFT ownership back to the creator if an acceptable bid is not received. Smart contracts can also give NFTs utility or deactivate them.`}</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
