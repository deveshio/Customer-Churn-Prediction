function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-blue-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-grey-800">Devesh Suthar</h3>
              <p className="text-sm text-grey-400">
                Data Scientist & Full Stack Developer
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/devesh-suthar-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/deveshio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-blue-900 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">GitHub</span>
              </a>
              <a 
                href="https://www.kaggle.com/deveshsuthar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-cyan-500 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .256-.114.352-.375.352H5.299c-.233 0-.35-.117-.35-.352V.352c0-.233.117-.352.35-.352h2.635c.233 0 .35.117.35.352v17.475l7.935-8.833c.141-.164.305-.246.492-.246h3.256c.164 0 .258.047.281.141.023.094 0 .187-.07.281l-6.162 6.425 6.765 7.96c.094.118.117.211.07.305z"/>
                </svg>
                <span className="text-xs font-medium">Kaggle</span>
              </a>
            </div>
            
            
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4 mt-6 md:mt-0">
            <h4 className="text-sm font-semibold text-grey-400 uppercase tracking-wider">Project Resources</h4>
            <div className="flex items-center space-x-6">
              
              <a 
                href="https://github.com/deveshio/Customer-Churn-Prediction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-indigo-600 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-xs">Repo</span>
              </a>

              <a 
                href="https://www.kaggle.com/code/deveshsuthar/customer-churn-project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-orange-500 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs">Notebook</span>
              </a>

              <a 
                href="https://tinu.be/deveshio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-blue-500 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-xs">More Projects</span>
              </a>
              
            </div>
            <p className="text-xs text-grey-400">
              © {currentYear} • Licensed under <a href="https://opensource.org/licenses/MIT" className="underline hover:text-indigo-600">MIT</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;