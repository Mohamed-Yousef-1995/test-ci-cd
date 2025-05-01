import ClockSvg from "@/assets/icons/ClockSvg";
import SquareBoxBlueSvg from "@/assets/icons/squareBoxBlue";
import SquareBoxGreenSvg from "@/assets/icons/squareBoxGreen";
import SuccessIconSvg from "@/assets/icons/SuccessCheckMarkSvg";

interface Card {
  type: "customer" | "plot" | "owner" | "approval" | "payment";
  initials?: string;
  name: string;
  subtext: string;
  plotType?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  ownerStatus?: string;
  paymentStatus?: string;
  approvalStatus?: string;
}

interface RequestStatusProps {
  cards: Card[];
}

const getPlotClass = (plotType?: string) => {
  return plotType === "green"
    ? "bg-green-500"
    : plotType === "blue"
    ? "bg-blue-500"
    : "";
};

const RequestStatus: React.FC<RequestStatusProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-5">
      {cards.map((card, index) => {
        const isPending =
          card.ownerStatus === "pending" ||
          card.paymentStatus === "pending" ||
          card.approvalStatus === "pending";

        return (
          <div
            key={index}
            className={`relative flex h-full rounded-lg shadow-md overflow-hidden ${
              isPending ? "opacity-50" : ""
            } ${
              card.name === "Action" ? "p-0 w-full bg-white" : "p-4"
            } ${getPlotClass(card.plotType)}`}
          >
            {card.name === "Action" ? (
              <div className="w-full relative h-full flex flex-col">
                <div className="flex h-[88px]">
                  <div
                    className={`w-1/2 flex items-center justify-center p-4 ${
                      card.plotType === "green" ? "bg-[#45B2B2]" : "bg-[#E7F5FF]"
                    }`}
                  >
                    {card.imageUrl && card.plotType === "green" ? (
                      <SquareBoxGreenSvg/>
                    ) : ( <SquareBoxBlueSvg />)}
                  </div>
                  <div
                    className={`w-1/2 flex p-4 flex-col justify-center text-white ${
                      card.plotType === "green" ? "bg-[#169F9F]" : "bg-[#339Af0]"
                    }`}
                  >
                    <div className="font-semibold">{card.name}</div>
                    <div className="text-sm">{card.subtext}</div>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    card.plotType === "green" ? "bg-[#2B8A3B]" : "bg-[#1864AB]"
                  }`}
                ></div>
              </div>
            ) : (
              <>
                {card.type === "customer" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2B8A3B]"></div>
                )}

                <div className="flex-shrink-0">
                  {card.type === "customer" && (
                    <div className="w-10 h-10 bg-[#169F9F] text-white flex items-center justify-center rounded-full font-bold">
                      {card.initials}
                    </div>
                  )}
                  {card.type === "plot" && card.imageUrl && (
                    <SquareBoxGreenSvg />
                  )}

                  {/* Owner Status */}
                  {card.type === "owner" && (
                    <div className="flex items-center space-x-2">
                      {card.ownerStatus === "pending" && (
                        <ClockSvg className="text-xl mt-1" />
                      )}
                      {card.ownerStatus === "ok" && (
                        <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
                          AM
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Layout */}
                {card.type === "payment" || card.type === "approval" ? (
                  <div className="flex flex-col items-center text-center w-full p-4">
                    {/* Payment & Approval Icon */}
                    {card.paymentStatus === "pending" ||
                    card.approvalStatus === "pending" ? (
                      <ClockSvg className="text-3xl text-gray-600" />
                    ) : null}

                    {card.paymentStatus === "success" ||
                    card.approvalStatus === "success" ? (
                      <div className="w-12 h-12 text-white flex items-center justify-center rounded-full font-bold">
                        <SuccessIconSvg className="text-green-500 text-xl" />
                      </div>
                    ) : null}

                    {/* Name */}
                    <div className="font-semibold mt-2">{card.name}</div>

                    {/* Subtext */}
                    <div className="text-gray-500 text-sm">{card.subtext}</div>
                  </div>
                ) : (
                  <div className="ml-4">
                    <div
                      className={`font-semibold ${
                        card.type === "owner" && card.ownerStatus === "ok"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                    >
                      {card.name}
                    </div>
                    <div
                      className={`${
                        card.type === "owner" && card.ownerStatus === "ok"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                    >
                      {card.subtext}
                    </div>
                  </div>
                )}

                {/* Bottom Border for Payment & Approval Status */}
                {card.approvalStatus === "initial" ? (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
                ) : null}
                {card.approvalStatus === "error" ? (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></div>
                ) : null}
                {card.paymentStatus === "success" ||
                card.approvalStatus === "success" ? (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500"></div>
                ) : null}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RequestStatus;
