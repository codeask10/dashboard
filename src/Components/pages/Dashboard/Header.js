import React,{useState} from 'react'
import css from './Header.module.css';
import { cardsData, groupNumber,UserData } from '../../Data';
import Statistics from '../../Statistic/Statistics';
import Polararea from '../../PolarArea/Polararea';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className={css.container} >

      {/* left side */}
      < div className={css.dashboard} >

        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index) => (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Statistics chartData={userData}  />

      </div >


    <Polararea/>
    </div >
  )
}

export default Dashboard