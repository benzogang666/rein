import "./Vacancies.css";

const Vacancies = () => {
  return (
    <>
      <div className="vacancies">
        <div className="vacancies-label">
          По поводу вакансии обращаться по номеру телефона или по почте
        </div>
        <div className="vacancies-storage">
          <div className="vacancy">
            <div className="vacancy-status"></div>
            <div className="vacancy-data">
              <div>Официант</div>
              <div>График 2/2</div>
              <div>Зарплата 250 000 T</div>
            </div>
          </div>
          <div className="vacancy">
            <div className="vacancy-status"></div>
            <div className="vacancy-data">
              <div>Официант</div>
              <div>График 2/2</div>
              <div>Зарплата 250 000 T</div>
            </div>
          </div>
          <div className="vacancy">
            <div className="vacancy-status"></div>
            <div className="vacancy-data">
              <div>Официант</div>
              <div>График 2/2</div>
              <div>Зарплата 250 000 T</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
