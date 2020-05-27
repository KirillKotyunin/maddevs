import { mount } from '@vue/test-utils';

import FileInput from '@/components/Careers/FileInput';

describe('FileInput component', () => {
  let wrapper;
  let data = {
    selectedFile: null
  };

  beforeEach(() => {
    wrapper = mount(FileInput);
  });

  test("is Vue's instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data);
  });

  test('should  render .file-input__cv--attachable if !selectedFile', () => {
    wrapper = mount(FileInput);

    const container = wrapper.findAll('.file-input__cv').at(0);
    expect(container.classes()).toContain('file-input__cv--attachable');
  });

  test('should not render none-decorated-dash if while selectedFile if falsy', () => {
    wrapper = mount(FileInput);
    expect(wrapper.find('none-decorated-dash').exists()).toBe(false);
  });

  test('should test change emit', () => {
    wrapper = mount(FileInput);
    const selectedFile = 'mockedFile.doc';
    wrapper.vm.$emit('input', selectedFile);
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input).toStrictEqual([[selectedFile]]);
  });
});
