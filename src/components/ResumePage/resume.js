import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import Viewer from core
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Import default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css'; // Core styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Plugin styles

function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section id='resume-section' className='resume-section'>
      <p>Please email if you have questions!</p>
      <div style={{ height: '637px', width: '80%' }}>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
          <Viewer
            fileUrl='https://docs.google.com/document/d/1u8Go0lS6eTKbvYy-eVjPEfg2Y08wokaDN7mJ56GE4bY/export?format=pdf'
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </section>
  );
}

export default ResumePage;
