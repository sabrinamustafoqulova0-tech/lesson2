import React, { Component } from "react";
import Swiper from "./Swiper";
import Start from "./Start";
import icon1 from "../images/icon (6).png";
import icon2 from "../images/icon (7).png";
import CardToDo from "./CardToDo";
import Colection from "./Colection";

class Discover extends Component {
  render() {
    return (
      <>
        <Start/>
        <Swiper/>
        <div className="px-[10px] md:px-[40px] lg:px-0 mt-[40px]">
          <h1 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-center">
            Top Collection
          </h1>

          <div className="overflow-x-auto ">
            <table className="min-w-[700px] w-[90%] m-auto mt-[40px]">
              <thead>
                <tr>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    Collection
                  </td>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    Volume
                  </td>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    24h %
                  </td>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    Floor Price
                  </td>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    Owners
                  </td>
                  <td className="font-bold text-[#93989A] text-[12px] md:text-[14px]">
                    Items
                  </td>
                </tr>
              </thead>

              <tbody className="text-[14px] md:text-[16px] lg:text-[18px]">
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-[10px]">
                    <div className="flex items-center gap-3">
                      <img src={icon1} alt="" className="w-[40px] md:w-auto" />
                      <div>
                        <p className="text-[16px] md:text-[20px] lg:text-2xl">
                          Alex Ca.
                        </p>
                        <p className="text-[#93989A] text-[12px] md:text-[14px]">
                          By Alex
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold p-[10px]">$ 8,456</td>
                  <td className="text-green-500 p-[10px]">+ 27.78%</td>
                  <td className="font-bold p-[10px]">$ 3,5</td>
                  <td className="p-[10px]">2.2K</td>
                  <td className="p-[10px]">500</td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-[10px]">
                    <div className="flex items-center gap-3">
                      <img src={icon2} alt="" className="w-[40px] md:w-auto" />
                      <div>
                        <p className="text-[16px] md:text-[20px] lg:text-2xl">
                          Alex Ca.
                        </p>
                        <p className="text-[#93989A] text-[12px] md:text-[14px]">
                          By Alex
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold p-[10px]">$ 8,456</td>
                  <td className="text-green-500 p-[10px]">+ 27.78%</td>
                  <td className="font-bold p-[10px]">$ 3,5</td>
                  <td className="p-[10px]">2.2K</td>
                  <td className="p-[10px]">500</td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-[10px]">
                    <div className="flex items-center gap-3">
                      <img src={icon1} alt="" className="w-[40px] md:w-auto" />
                      <div>
                        <p className="text-[16px] md:text-[20px] lg:text-2xl">
                          Alex Ca.
                        </p>
                        <p className="text-[#93989A] text-[12px] md:text-[14px]">
                          By Alex
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold p-[10px]">$ 8,456</td>
                  <td className="text-green-500 p-[10px]">+ 27.78%</td>
                  <td className="font-bold p-[10px]">$ 3,5</td>
                  <td className="p-[10px]">2.2K</td>
                  <td className="p-[10px]">500</td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-[10px]">
                    <div className="flex items-center gap-3">
                      <img src={icon2} alt="" className="w-[40px] md:w-auto" />
                      <div>
                        <p className="text-[16px] md:text-[20px] lg:text-2xl">
                          Alex Ca.
                        </p>
                        <p className="text-[#93989A] text-[12px] md:text-[14px]">
                          By Alex
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold p-[10px]">$ 8,456</td>
                  <td className="text-green-500 p-[10px]">+ 27.78%</td>
                  <td className="font-bold p-[10px]">$ 3,5</td>
                  <td className="p-[10px]">2.2K</td>
                  <td className="p-[10px]">500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <CardToDo/>
        <Colection/>
      </>
    );
  }
}

export default Discover;
