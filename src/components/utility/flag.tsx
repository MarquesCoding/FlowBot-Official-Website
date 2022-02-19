interface flags {
  countrycode: String;
  language: String;
}

export const FlagSVG: React.FC<flags> = ({ countrycode, language }) => {
  return (
    <li className="flag group">
      <img
        className="rounded-md"
        alt={`${language}`}
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countrycode}.svg`}
      />
      <span className="flag-tooltip group-hover:scale-100 ">{language}</span>
    </li>
  );
};
