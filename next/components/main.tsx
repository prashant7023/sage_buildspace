import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="pt-8 min-h-[calc(100dvh-57px)] md:min-h-dvh flex flex-col gap-16">
      <div className="my-auto mx-auto flex flex-col gap-16">
        <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl text-center">
          find and
          <br />
          be found.
        </h1>
        <div className="flex flex-col gap-4">
          <div
            className="relative h-64 max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden">
              <div className="flex -ml-4" style={{ transform: 'translate3d(-322.657px, 0px, 0px)' }}>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-48"
                  style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                >
                  {/* Add your slide content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
