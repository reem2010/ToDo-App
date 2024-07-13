import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../../Api/tasks";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icons from "../../constants/icon.js";
import { styles } from "../../styles/main.style.js";
import { UpdatePopup } from "./popUp.js";

export const HomeComponent = ({ updated, triggerUpdated }) => {
  const [tasks, setTasks] = useState(null);
  const [Visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);

  const changeVisibility = () => {
    setVisible(!Visible);
  };

  const handleDelete = async (id) => {
    const res = await deleteTask(id);
    if (res) {
      triggerUpdated();
    }
  };
  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, [updated]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {tasks && tasks.length > 0 ? (
        tasks.map((data) => {
          return (
            <View style={styles.task} key={data.id}>
              <View style={styles.taskHeader}>
                <Text style={styles.title}>{data.title}</Text>
                <TouchableOpacity
                  style={styles.editbutton}
                  onPress={() => {
                    changeVisibility(!Visible);
                    setSelected(data);
                  }}
                >
                  <Image style={styles.editIcon} source={Icons.edit} />
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>{data.description}</Text>
              <View style={styles.taskData}>
                <Text style={styles.bullet}>•</Text>
                <Text
                  style={styles.priority}
                >{`Priority:   ${data.priority}`}</Text>
              </View>
              <TouchableOpacity
                style={styles.deletebutton}
                onPress={() => {
                  handleDelete(data.id);
                }}
              >
                <Image style={styles.deleteIcon} source={Icons.trash} />
              </TouchableOpacity>
              <UpdatePopup
                data={selected}
                triggerUpdated={triggerUpdated}
                changeVisibility={changeVisibility}
                Visible={Visible}
              />
            </View>
          );
        })
      ) : (
        <Text style={styles.text}>No tasks to show</Text>
      )}
    </View>
  );
};
