import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Text,
  processColor,
} from "react-native";
import { useState } from "react";
import { createTask, UpdateTask } from "../../Api/tasks";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/form.style";

export const AddPopup = ({ changeVisibility, triggerUpdated, addVisible }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Normal");
  const handleSubmit = async () => {
    if (title != "" && description != "") {
      const data = await createTask({
        title,
        description,
        priority,
      });
      if (data) {
        triggerUpdated();
        changeVisibility();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addVisible}
      onRequestClose={changeVisibility}
    >
      <View
        style={{
          width: "90%",
          minHeight: "90%",
          margin: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.99)",
          borderWidth: 1,
          borderColor: "rgba(239, 239, 255, 0.99)",
          borderRadius: 15,
          padding: 20,
        }}
      >
        <Text style={styles.text}>Create task</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter task title"
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          value={title}
          onChangeText={(val) => {
            setTitle(val);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter task description"
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={(val) => {
            setDescription(val);
          }}
        />

        <Picker
          style={styles.picker}
          selectedValue={priority}
          onValueChange={(prio) => {
            setPriority(prio);
          }}
          mode="dropdown"
          dropdownIconColor={processColor("#ffffff")}
        >
          <Picker.Item label="Critical" value="Critical" />
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Low" value="Low" />
        </Picker>

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export const UpdatePopup = ({
  data,
  triggerUpdated,
  changeVisibility,
  Visible,
}) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [priority, setPriority] = useState(data.priority);
  const handleSubmit = async () => {
    if (title != "" && description != "") {
      const res = await UpdateTask(
        {
          title,
          description,
          priority,
        },
        data.id
      );
      if (res) {
        triggerUpdated();
        changeVisibility();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={Visible}
      onRequestClose={changeVisibility}
    >
      <View
        style={{
          width: "90%",
          minHeight: "90%",
          margin: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.99)",
          borderWidth: 1,
          borderColor: "rgba(239, 239, 255, 0.99)",
          borderRadius: 15,
          padding: 20,
        }}
      >
        <Text style={styles.text}>Update task</Text>

        <TextInput
          style={styles.textInput}
          placeholder={data.title}
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          value={title}
          onChangeText={(val) => {
            setTitle(val);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder={data.description}
          placeholderTextColor="rgba(255, 255, 255, 0.72)"
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={(val) => {
            setDescription(val);
          }}
        />

        <Picker
          style={styles.picker}
          selectedValue={priority}
          onValueChange={(prio) => {
            setPriority(prio);
          }}
          mode="dropdown"
          dropdownIconColor={processColor("#ffffff")}
        >
          <Picker.Item label="Critical" value="Critical" />
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Low" value="Low" />
        </Picker>

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
