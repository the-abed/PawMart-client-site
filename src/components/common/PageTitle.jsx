// components/common/PageTitle.jsx
import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | PawMart`;
  }, [title]);

  return null;
};

export default PageTitle;
