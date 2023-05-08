import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CreditReport() {
  const router = useRouter();
  const { report } = router.query;
  useEffect(() => {
    if (report !== undefined) {
      const script1 = document.createElement("script");
      script1.src = `https://embed.array.io/cms/array-web-component.js?appKey=${report[0]}`;
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = `https://embed.array.io/cms/array-credit-report.js?appKey=${report[0]}`;
      script2.async = true;
      document.body.appendChild(script2);
    }
  }, [report]);

  return (
    <div>
      {report && (
        <array-credit-report
          appKey={report[0]}
          userToken={report[1]}
          sandbox="true"
          defaultBureau="all"
        ></array-credit-report>
      )}
    </div>
  );
}
