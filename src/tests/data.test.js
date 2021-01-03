import churchesIndex from '../data';
const { researchers, churches } = churchesIndex;

describe('Testing index of churches and researchers', () => {
  it('should have proper researchers informations', () => {
    const listOfChurches = churches.map((church) => church.id);
    researchers.forEach((researcher) => {
      const { id, firstName, surname, responsableFor } = researcher;
      expect(id.length).toBe(23);
      expect(id).toContain('rs-');
      expect(firstName).not.toContain(' ');
      expect(surname).not.toBe(undefined);

      responsableFor.forEach((church) => {
        expect(church.length).toBe(23);
        expect(church).toContain('ch-');
        expect(listOfChurches).toContain(church);
      });
    });
  });

  it('should have proper churches informations', () => {
    churches.forEach((church) => {
      const { id, name, address, location, images, schedule, date } = church;
      expect(id.length).toBe(23);
      expect(id).toContain('ch-');
      expect(name).not.toBe(undefined);

      const { street, number, region } = address;
      expect(street).not.toBe(undefined);
      expect(number).not.toBe(undefined);
      expect(region).not.toBe(undefined);

      expect(location.length).toBe(2);
      if(images) {
        images.forEach((image) => {
          const { id, path } = image;
          expect(id.length).toBe(23);
          expect(id).toContain('im-');
          expect(path).toContain('/churches/');
        })
      }

      if(schedule) {
        schedule.forEach((worship) => {
          const { id, day, hour } = worship;
          expect(id.length).toBe(23);
          expect(id).toContain('da-');
          expect(day).not.toBe(undefined);
          expect(hour).not.toBe(undefined);
        });
      }

      const { fieldResearch, analysis } = date;
      expect(fieldResearch).not.toBe(undefined);
      expect(analysis).not.toBe(undefined);
    })
  })
});
