import React, { useState, useEffect, useMemo } from "react";
import Section from "./Section.jsx";
import { Award, ExternalLink, FileText, Menu, FileDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
// import ViewPDF from './viewPDF.jsx';

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Certificates = React.forwardRef(({ id, certificates = [] }, ref) => {
  const [issuers, setIssuers] = useState([]);
  const [activeIssuer, setActiveIssuer] = useState("All");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);




//   useEffect(() => {
//     if (certificates.length === 0) {
//       setActiveIssuer("All");
//       return;
//     }





//     const uniqueIssuers = certificates.reduce((acc, cert) => {
//         cert.issuers.forEach((issuer) => {
//             if (!acc.find((i) => i.id === issuer.id)) {
//             acc.push(issuer);
//             }
//         });
//         return acc;
//     }, []);
//         setIssuers(uniqueIssuers);





//     setIssuers(uniqueIssuers);

//     // const issuerCounts = certificates.reduce((acc, cert) => {
//     //   const issuerName = cert.issuer.name;
//     //   acc[issuerName] = (acc[issuerName] || 0) + 1;
//     //   return acc;
//     // }, {});




//     const issuerCounts = certificates.reduce((acc, cert) => {
//         cert.issuers.forEach((issuer) => {
//             acc[issuer.name] = (acc[issuer.name] || 0) + 1;
//         });
//         return acc;
//     }, {});







//     if (Object.keys(issuerCounts).length > 0) {
//       const defaultIssuer = Object.keys(issuerCounts).reduce((a, b) =>
//         issuerCounts[a] > issuerCounts[b] ? a : b
//       );
//       setActiveIssuer(defaultIssuer);
//     } else {
//       setActiveIssuer("All");
//     }
//   }, [certificates]);



useEffect(() => {
  if (certificates.length === 0) {
    setActiveIssuer("All");
    return;
  }

  // Unique issuers
  const uniqueIssuers = certificates.reduce((acc, cert) => {
    (cert.issuers || []).forEach((issuer) => {
      if (!acc.find((i) => i.id === issuer.id)) {
        acc.push(issuer);
      }
    });
    return acc;
  }, []);
  setIssuers(uniqueIssuers);

  // Count issuers
  const issuerCounts = certificates.reduce((acc, cert) => {
    (cert.issuers || []).forEach((issuer) => {
      acc[issuer.name] = (acc[issuer.name] || 0) + 1;
    });
    return acc;
  }, {});

  if (Object.keys(issuerCounts).length > 0) {
    const defaultIssuer = Object.keys(issuerCounts).reduce((a, b) =>
      issuerCounts[a] > issuerCounts[b] ? a : b
    );
    setActiveIssuer(defaultIssuer);
  } else {
    setActiveIssuer("All");
  }
}, [certificates]);










//   const filteredCertificates = useMemo(() => {
//     if (activeIssuer === "All") {
//       return certificates;
//     }
//     // return certificates.filter((cert) => cert.issuer.name === activeIssuer);

//     return certificates.filter((cert) =>
//         cert.issuers.some((issuer) => issuer.name === activeIssuer)
//     );

//   }, [activeIssuer, certificates]);



const filteredCertificates = useMemo(() => {
  if (activeIssuer === "All") return certificates;

  return certificates.filter((cert) =>
    (cert.issuers || []).some((issuer) => issuer.name === activeIssuer)
  );
}, [activeIssuer, certificates]);











  const placeholderLogo = `https://placehold.co/64x64/475569/E2E8F0?text=Logo`;

  return (
    <Section ref={ref} id={id} title="Awards & Certificates">
      <div className="p-8 md:p-12 bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-lg shadow-lg ">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside
            className={`w-full transition-all sticky duration-300 ease-in-out  ${
              isSidebarCollapsed ? "lg:w-20" : "lg:w-1/4"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="hidden lg:block p-2 rounded-md hover:bg-slate-700/50"
              >
                <Menu size={20} className="text-gray-400" />
              </button>

              <h3
                className="font-heading text-xl font-semibold text-gray-900 dark:text-white transition-opacity"
              >
                Filter
              </h3>
              {/*

              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="hidden lg:block p-2 rounded-md hover:bg-slate-700/50 ml-auto"
              >
                <Menu size={20} className="text-gray-400" />
              </button> */}
            </div>

            <div  className="flex flex-row overflow-x-auto lg:flex-col lg:max-h-96 lg:overflow-y-auto lg:space-y-2 lg:gap-0 thin-scrollbar">
              <button
                    onClick={() => setActiveIssuer("All")}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                        activeIssuer === 'All' ? 'bg-accent/20 text-accent' : 'hover:bg-slate-700/50'
                    } ${
                        isSidebarCollapsed ? "lg:justify-center" : ""
                    }`}
                >
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 ${
                    activeIssuer === "All" ? "bg-accent" : "bg-slate-600"
                  }`}
                >
                  <Award size={18} className="text-white" />
                </div>
                <span
                  className={`font-semibold text-gray-900 dark:text-white hidden lg:inline-block ${
                    isSidebarCollapsed ? "lg:hidden" : ""
                  }`}
                >
                  All Certificates
                </span>
              </button>

              {issuers.map((issuer) => (
                <button
                  key={issuer.id}
                  onClick={() => setActiveIssuer(issuer.name)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                    isSidebarCollapsed ? "lg:justify-center" : "" // Center the icon when collapsed
                  }  ${
                    activeIssuer === issuer.name
                      ? "bg-accent/20 text-accent"
                      : "hover:bg-slate-700/50"
                  }`}
                >
                  <img
                    src={issuer.logo || issuer.logo_url || placeholderLogo}
                    alt={issuer.name}
                    className="w-8 h-8 object-contain rounded-md flex-shrink-0"
                  />
                  <span
                    className={`font-semibold text-gray-900 dark:text-white hidden lg:inline-block ${
                      isSidebarCollapsed ? "lg:hidden" : ""
                    }`}
                  >
                    {issuer.name}
                  </span>{" "}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-grow lg:flex-col lg:max-h-[60vh] lg:overflow-y-auto lg:space-y-2 lg:gap-0 thin-scrollbar">
            <motion.div
              layout
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 ${
                isSidebarCollapsed ? "lg:grid-cols-3" : "lg:grid-cols-2"
              }`}
            >
              <AnimatePresence>
                {filteredCertificates.map((cert) => (
                  <motion.div
                    layout
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-slate-700/50 shadow-lg shadow-accent/10 hover:shadow-accent/20 transition-shadow duration-300"
                  >
                    <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer.name} &bull; {formatDate(cert.issue_date)}
                    </p> */}


                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {cert.issuers && cert.issuers.length > 0
                        ? cert.issuers.map((issuer) => issuer.name).join(", ")
                        : "No issuer"} &bull; {formatDate(cert.issue_date)}
                    </p>


                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-slate-700">
                      {cert.credential_url && (
                        <a
                          href={cert.credential_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                        >
                          View Credential{" "}
                          <ExternalLink className="ml-1.5 w-4 h-4" />
                        </a>
                      )}
                      {cert.pdf_file && (
                        <a
                          href={cert.pdf_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                        >
                          Download PDF <FileDown className="ml-1.5 w-4 h-4" />
                        </a>
                      )}

                      {/* <ViewPDF fileUrl={cert.pdf_file} /> */}

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Certificates;
